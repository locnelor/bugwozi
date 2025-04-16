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
exports.StudyUserEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var base_u_entity_1 = require("../base.u.entity");
var study_message_1 = require("./study_message");
var study_reservation_1 = require("./study_reservation");
var StudyUserEntity = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = base_u_entity_1.BaseUEntity;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _isAdmin_decorators;
    var _isAdmin_initializers = [];
    var _isAdmin_extraInitializers = [];
    var _reservation_decorators;
    var _reservation_initializers = [];
    var _reservation_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var StudyUserEntity = _classThis = /** @class */ (function (_super) {
        __extends(StudyUserEntity_1, _super);
        function StudyUserEntity_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.account = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _account_initializers, void 0));
            _this.password = (__runInitializers(_this, _account_extraInitializers), __runInitializers(_this, _password_initializers, void 0));
            _this.isAdmin = (__runInitializers(_this, _password_extraInitializers), __runInitializers(_this, _isAdmin_initializers, void 0));
            _this.reservation = (__runInitializers(_this, _isAdmin_extraInitializers), __runInitializers(_this, _reservation_initializers, void 0));
            _this.message = (__runInitializers(_this, _reservation_extraInitializers), __runInitializers(_this, _message_initializers, void 0));
            __runInitializers(_this, _message_extraInitializers);
            return _this;
        }
        return StudyUserEntity_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StudyUserEntity");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, graphql_1.Field)()];
        _account_decorators = [(0, graphql_1.Field)()];
        _password_decorators = [(0, graphql_1.Field)()];
        _isAdmin_decorators = [(0, graphql_1.Field)(function () { return Boolean; })];
        _reservation_decorators = [(0, graphql_1.Field)(function () { return [study_reservation_1.StudyReservationEntity]; }, { nullable: true })];
        _message_decorators = [(0, graphql_1.Field)(function () { return [study_message_1.StudyMessageEntity]; }, { nullable: true })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _isAdmin_decorators, { kind: "field", name: "isAdmin", static: false, private: false, access: { has: function (obj) { return "isAdmin" in obj; }, get: function (obj) { return obj.isAdmin; }, set: function (obj, value) { obj.isAdmin = value; } }, metadata: _metadata }, _isAdmin_initializers, _isAdmin_extraInitializers);
        __esDecorate(null, null, _reservation_decorators, { kind: "field", name: "reservation", static: false, private: false, access: { has: function (obj) { return "reservation" in obj; }, get: function (obj) { return obj.reservation; }, set: function (obj, value) { obj.reservation = value; } }, metadata: _metadata }, _reservation_initializers, _reservation_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StudyUserEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StudyUserEntity = _classThis;
}();
exports.StudyUserEntity = StudyUserEntity;
