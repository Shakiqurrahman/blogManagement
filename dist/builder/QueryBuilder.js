"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        const searchTerm = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        // Filtering
        const excludeFields = ['search', 'sortBy', 'sortOrder', 'fields'];
        excludeFields.forEach((el) => delete queryObj[el]);
        if (queryObj.filter) {
            this.modelQuery = this.modelQuery.find({
                author: queryObj.filter,
            });
            delete queryObj.filter;
        }
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    sortBy() {
        var _a, _b;
        const sortBy = ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sortBy) || 'createdAt';
        const sortOrder = (_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.sortOrder;
        const sort = sortOrder === 'desc' ? `-${sortBy}` : sortBy;
        this.modelQuery = this.modelQuery.sort(sort);
        return this;
    }
}
exports.default = QueryBuilder;
