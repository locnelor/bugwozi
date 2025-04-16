"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.StudyStoreEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var base_u_entity_1 = require("../base.u.entity");
var study_floor_1 = require("./study_floor");
var StudyStoreEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = base_u_entity_1.BaseUEntity;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _local_decorators;
    var _local_initializers = [];
    var _local_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _remark_decorators;
    var _remark_initializers = [];
    var _remark_extraInitializers = [];
    var _floors_decorators;
    var _floors_initializers = [];
    var _floors_extraInitializers = [];
    var StudyStoreEntity = _classThis = /** @class */ (function (_super) {
        __extends(StudyStoreEntity_1, _super);
        function StudyStoreEntity_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.local = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _local_initializers, void 0));
            _this.address = (__runInitializers(_this, _local_extraInitializers), __runInitializers(_this, _address_initializers, void 0));
            _this.status = (__runInitializers(_this, _address_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.remark = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _remark_initializers, void 0));
            _this.floors = (__runInitializers(_this, _remark_extraInitializers), __runInitializers(_this, _floors_initializers, void 0));
            __runInitializers(_this, _floors_extraInitializers);
            return _this;
        }
        return StudyStoreEntity_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StudyStoreEntity");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, graphql_1.Field)()];
        _local_decorators = [(0, graphql_1.Field)()];
        _address_decorators = [(0, graphql_1.Field)()];
        _status_decorators = [(0, graphql_1.Field)(function () { return Boolean; })];
        _remark_decorators = [(0, graphql_1.Field)(function () { return String; }, { nullable: true })];
        _floors_decorators = [(0, graphql_1.Field)(function () { return [study_floor_1.StudyFloorEntity]; }, { nullable: true })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _local_decorators, { kind: "field", name: "local", static: false, private: false, access: { has: function (obj) { return "local" in obj; }, get: function (obj) { return obj.local; }, set: function (obj, value) { obj.local = value; } }, metadata: _metadata }, _local_initializers, _local_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _remark_decorators, { kind: "field", name: "remark", static: false, private: false, access: { has: function (obj) { return "remark" in obj; }, get: function (obj) { return obj.remark; }, set: function (obj, value) { obj.remark = value; } }, metadata: _metadata }, _remark_initializers, _remark_extraInitializers);
        __esDecorate(null, null, _floors_decorators, { kind: "field", name: "floors", static: false, private: false, access: { has: function (obj) { return "floors" in obj; }, get: function (obj) { return obj.floors; }, set: function (obj, value) { obj.floors = value; } }, metadata: _metadata }, _floors_initializers, _floors_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StudyStoreEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StudyStoreEntity = _classThis;
}();
exports.StudyStoreEntity = StudyStoreEntity;
