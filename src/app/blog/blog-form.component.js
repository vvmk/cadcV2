"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var blog_post_model_1 = require("../models/blog-post.model");
var BlogFormComponent = /** @class */ (function () {
    function BlogFormComponent(blogService) {
        this.blogService = blogService;
        this.blog = new blog_post_model_1.BlogPost("Why is DesignOps a thing?", "[ body ]", "June 13, 2018 9", ["testing", "writing", "design", "ops", "programming"]);
    }
    BlogFormComponent.prototype.ngOnInit = function () {
    };
    BlogFormComponent.prototype.preview = function () {
        console.log("TODO: trigger preview");
    };
    BlogFormComponent = __decorate([
        core_1.Component({
            selector: 'cxa-blog-form',
            templateUrl: './blog-form.component.html',
            styleUrls: ['./blog-form.component.css']
        })
    ], BlogFormComponent);
    return BlogFormComponent;
}());
exports.BlogFormComponent = BlogFormComponent;
