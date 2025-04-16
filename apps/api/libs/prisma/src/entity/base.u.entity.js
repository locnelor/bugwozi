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
exports.BaseUEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var BaseUEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _uid_decorators;
    var _uid_initializers = [];
    var _uid_extraInitializers = [];
    var _createAt_decorators;
    var _createAt_initializers = [];
    var _createAt_extraInitializers = [];
    var _updateAt_decorators;
    var _updateAt_initializers = [];
    var _updateAt_extraInitializers = [];
    var BaseUEntity = _classThis = /** @class */ (function () {
        function BaseUEntity_1() {
            this.uid = __runInitializers(this, _uid_initializers, void 0);
            this.createAt = (__runInitializers(this, _uid_extraInitializers), __runInitializers(this, _createAt_initializers, void 0));
            this.updateAt = (__runInitializers(this, _createAt_extraInitializers), __runInitializers(this, _updateAt_initializers, void 0));
            __runInitializers(this, _updateAt_extraInitializers);
        }
        return BaseUEntity_1;
    }());
    __setFunctionName(_classThis, "BaseUEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _uid_decorators = [(0, graphql_1.Field)()];
        _createAt_decorators = [(0, graphql_1.Field)()];
        _updateAt_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _uid_decorators, { kind: "field", name: "uid", static: false, private: false, access: { has: function (obj) { return "uid" in obj; }, get: function (obj) { return obj.uid; }, set: function (obj, value) { obj.uid = value; } }, metadata: _metadata }, _uid_initializers, _uid_extraInitializers);
        __esDecorate(null, null, _createAt_decorators, { kind: "field", name: "createAt", static: false, private: false, access: { has: function (obj) { return "createAt" in obj; }, get: function (obj) { return obj.createAt; }, set: function (obj, value) { obj.createAt = value; } }, metadata: _metadata }, _createAt_initializers, _createAt_extraInitializers);
        __esDecorate(null, null, _updateAt_decorators, { kind: "field", name: "updateAt", static: false, private: false, access: { has: function (obj) { return "updateAt" in obj; }, get: function (obj) { return obj.updateAt; }, set: function (obj, value) { obj.updateAt = value; } }, metadata: _metadata }, _updateAt_initializers, _updateAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BaseUEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BaseUEntity = _classThis;
}();
exports.BaseUEntity = BaseUEntity;
