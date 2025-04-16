"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsOnTagsEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var blog_tag_entity_1 = require("./blog.tag.entity");
var blog_posts_entity_1 = require("./blog.posts.entity");
var BlogPostsOnTagsEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _postsId_decorators;
    var _postsId_initializers = [];
    var _postsId_extraInitializers = [];
    var _tagId_decorators;
    var _tagId_initializers = [];
    var _tagId_extraInitializers = [];
    var _tag_decorators;
    var _tag_initializers = [];
    var _tag_extraInitializers = [];
    var _post_decorators;
    var _post_initializers = [];
    var _post_extraInitializers = [];
    var BlogPostsOnTagsEntity = _classThis = /** @class */ (function () {
        function BlogPostsOnTagsEntity_1() {
            this.postsId = __runInitializers(this, _postsId_initializers, void 0);
            this.tagId = (__runInitializers(this, _postsId_extraInitializers), __runInitializers(this, _tagId_initializers, void 0));
            this.tag = (__runInitializers(this, _tagId_extraInitializers), __runInitializers(this, _tag_initializers, void 0));
            this.post = (__runInitializers(this, _tag_extraInitializers), __runInitializers(this, _post_initializers, void 0));
            __runInitializers(this, _post_extraInitializers);
        }
        return BlogPostsOnTagsEntity_1;
    }());
    __setFunctionName(_classThis, "BlogPostsOnTagsEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _postsId_decorators = [(0, graphql_1.Field)()];
        _tagId_decorators = [(0, graphql_1.Field)()];
        _tag_decorators = [(0, graphql_1.Field)(function () { return blog_tag_entity_1.BlogTagEntity; }, { nullable: true })];
        _post_decorators = [(0, graphql_1.Field)(function () { return blog_posts_entity_1.BlogPostsEntity; }, { nullable: true })];
        __esDecorate(null, null, _postsId_decorators, { kind: "field", name: "postsId", static: false, private: false, access: { has: function (obj) { return "postsId" in obj; }, get: function (obj) { return obj.postsId; }, set: function (obj, value) { obj.postsId = value; } }, metadata: _metadata }, _postsId_initializers, _postsId_extraInitializers);
        __esDecorate(null, null, _tagId_decorators, { kind: "field", name: "tagId", static: false, private: false, access: { has: function (obj) { return "tagId" in obj; }, get: function (obj) { return obj.tagId; }, set: function (obj, value) { obj.tagId = value; } }, metadata: _metadata }, _tagId_initializers, _tagId_extraInitializers);
        __esDecorate(null, null, _tag_decorators, { kind: "field", name: "tag", static: false, private: false, access: { has: function (obj) { return "tag" in obj; }, get: function (obj) { return obj.tag; }, set: function (obj, value) { obj.tag = value; } }, metadata: _metadata }, _tag_initializers, _tag_extraInitializers);
        __esDecorate(null, null, _post_decorators, { kind: "field", name: "post", static: false, private: false, access: { has: function (obj) { return "post" in obj; }, get: function (obj) { return obj.post; }, set: function (obj, value) { obj.post = value; } }, metadata: _metadata }, _post_initializers, _post_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BlogPostsOnTagsEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BlogPostsOnTagsEntity = _classThis;
}();
exports.BlogPostsOnTagsEntity = BlogPostsOnTagsEntity;
