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
exports.StudyFloorEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var base_u_entity_1 = require("../base.u.entity");
var study_room_1 = require("./study_room");
var StudyFloorEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = base_u_entity_1.BaseUEntity;
    var _floorNumber_decorators;
    var _floorNumber_initializers = [];
    var _floorNumber_extraInitializers = [];
    var _storeId_decorators;
    var _storeId_initializers = [];
    var _storeId_extraInitializers = [];
    var _studyRooms_decorators;
    var _studyRooms_initializers = [];
    var _studyRooms_extraInitializers = [];
    var StudyFloorEntity = _classThis = /** @class */ (function (_super) {
        __extends(StudyFloorEntity_1, _super);
        function StudyFloorEntity_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.floorNumber = __runInitializers(_this, _floorNumber_initializers, void 0);
            _this.storeId = (__runInitializers(_this, _floorNumber_extraInitializers), __runInitializers(_this, _storeId_initializers, void 0));
            _this.studyRooms = (__runInitializers(_this, _storeId_extraInitializers), __runInitializers(_this, _studyRooms_initializers, void 0));
            __runInitializers(_this, _studyRooms_extraInitializers);
            return _this;
        }
        return StudyFloorEntity_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StudyFloorEntity");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _floorNumber_decorators = [(0, graphql_1.Field)()];
        _storeId_decorators = [(0, graphql_1.Field)()];
        _studyRooms_decorators = [(0, graphql_1.Field)(function () { return [study_room_1.StudyRoomEntity]; }, { nullable: true })];
        __esDecorate(null, null, _floorNumber_decorators, { kind: "field", name: "floorNumber", static: false, private: false, access: { has: function (obj) { return "floorNumber" in obj; }, get: function (obj) { return obj.floorNumber; }, set: function (obj, value) { obj.floorNumber = value; } }, metadata: _metadata }, _floorNumber_initializers, _floorNumber_extraInitializers);
        __esDecorate(null, null, _storeId_decorators, { kind: "field", name: "storeId", static: false, private: false, access: { has: function (obj) { return "storeId" in obj; }, get: function (obj) { return obj.storeId; }, set: function (obj, value) { obj.storeId = value; } }, metadata: _metadata }, _storeId_initializers, _storeId_extraInitializers);
        __esDecorate(null, null, _studyRooms_decorators, { kind: "field", name: "studyRooms", static: false, private: false, access: { has: function (obj) { return "studyRooms" in obj; }, get: function (obj) { return obj.studyRooms; }, set: function (obj, value) { obj.studyRooms = value; } }, metadata: _metadata }, _studyRooms_initializers, _studyRooms_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StudyFloorEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StudyFloorEntity = _classThis;
}();
exports.StudyFloorEntity = StudyFloorEntity;
