"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var blog_view_component_1 = require("./blog-view.component");
var blog_contents_component_1 = require("./blog-contents.component");
var blog_form_component_1 = require("./blog-form.component");
var blog_service_1 = require("../services/blog.service");
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                blog_view_component_1.BlogViewComponent,
                blog_contents_component_1.BlogContentsComponent,
                blog_form_component_1.BlogFormComponent
            ],
            providers: [
                blog_service_1.BlogService
            ]
        })
    ], BlogModule);
    return BlogModule;
}());
exports.BlogModule = BlogModule;
