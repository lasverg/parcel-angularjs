import angular from "angular";
import { controller } from "./controller";

angular.module("app", []).controller("ctrl", controller);

angular.bootstrap(document, ["app"]);
