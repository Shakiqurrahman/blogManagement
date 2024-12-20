import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const searchTerm = this?.query?.search;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(
                    (field) =>
                        ({
                            [field]: { $regex: searchTerm, $options: 'i' },
                        }) as FilterQuery<T>,
                ),
            });
        }

        return this;
    }

    filter() {
        const queryObj = { ...this.query };
        // Filtering
        const excludeFields = ['search', 'sortBy', 'sortOrder', 'fields'];

        excludeFields.forEach((el) => delete queryObj[el]);

        if (queryObj.filter) {
            this.modelQuery = this.modelQuery.find({
                author: queryObj.filter,
            } as FilterQuery<T>);
            delete queryObj.filter;
        }
        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

        return this;
    }

    sortBy() {
        const sortBy = (this?.query?.sortBy as string) || 'createdAt';
        const sortOrder = this?.query?.sortOrder as string;

        const sort = sortOrder === 'desc' ? `-${sortBy}` : sortBy;
        this.modelQuery = this.modelQuery.sort(sort);

        return this;
    }

}

export default QueryBuilder;
