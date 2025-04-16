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
exports.StudyRoomEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var base_u_entity_1 = require("../base.u.entity");
var study_seat_1 = require("./study_seat");
var study_floor_1 = require("./study_floor");
var StudyRoomEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = base_u_entity_1.BaseUEntity;
    var _floorId_decorators;
    var _floorId_initializers = [];
    var _floorId_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _capacity_decorators;
    var _capacity_initializers = [];
    var _capacity_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _seats_decorators;
    var _seats_initializers = [];
    var _seats_extraInitializers = [];
    var _floor_decorators;
    var _floor_initializers = [];
    var _floor_extraInitializers = [];
    var StudyRoomEntity = _classThis = /** @class */ (function (_super) {
        __extends(StudyRoomEntity_1, _super);
        function StudyRoomEntity_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.floorId = __runInitializers(_this, _floorId_initializers, void 0);
            _this.name = (__runInitializers(_this, _floorId_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.capacity = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _capacity_initializers, void 0));
            _this.status = (__runInitializers(_this, _capacity_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.seats = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _seats_initializers, void 0));
            _this.floor = (__runInitializers(_this, _seats_extraInitializers), __runInitializers(_this, _floor_initializers, void 0));
            __runInitializers(_this, _floor_extraInitializers);
            return _this;
        }
        return StudyRoomEntity_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StudyRoomEntity");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _floorId_decorators = [(0, graphql_1.Field)()];
        _name_decorators = [(0, graphql_1.Field)()];
        _capacity_decorators = [(0, graphql_1.Field)()];
        _status_decorators = [(0, graphql_1.Field)(function () { return Boolean; })];
        _seats_decorators = [(0, graphql_1.Field)(function () { return [study_seat_1.StudySeatEntity]; }, { nullable: true })];
        _floor_decorators = [(0, graphql_1.Field)(function () { return study_floor_1.StudyFloorEntity; }, { nullable: true })];
        __esDecorate(null, null, _floorId_decorators, { kind: "field", name: "floorId", static: false, private: false, access: { has: function (obj) { return "floorId" in obj; }, get: function (obj) { return obj.floorId; }, set: function (obj, value) { obj.floorId = value; } }, metadata: _metadata }, _floorId_initializers, _floorId_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _capacity_decorators, { kind: "field", name: "capacity", static: false, private: false, access: { has: function (obj) { return "capacity" in obj; }, get: function (obj) { return obj.capacity; }, set: function (obj, value) { obj.capacity = value; } }, metadata: _metadata }, _capacity_initializers, _capacity_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _seats_decorators, { kind: "field", name: "seats", static: false, private: false, access: { has: function (obj) { return "seats" in obj; }, get: function (obj) { return obj.seats; }, set: function (obj, value) { obj.seats = value; } }, metadata: _metadata }, _seats_initializers, _seats_extraInitializers);
        __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: function (obj) { return "floor" in obj; }, get: function (obj) { return obj.floor; }, set: function (obj, value) { obj.floor = value; } }, metadata: _metadata }, _floor_initializers, _floor_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StudyRoomEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StudyRoomEntity = _classThis;
}();
exports.StudyRoomEntity = StudyRoomEntity;
