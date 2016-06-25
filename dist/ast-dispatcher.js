"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class ASTDispatcher {
  constructor(prefix_16, errorIfMissing_17) {
    this.errorIfMissing = errorIfMissing_17;
    this.prefix = prefix_16;
  }
  dispatch(term_18) {
    let field_19 = this.prefix + term_18.type;
    if (typeof this[field_19] === "function") {
      return this[field_19](term_18);
    } else if (!this.errorIfMissing) {
      return term_18;
    }
    throw new Error(`Missing implementation for: ${ field_19 }`);
  }
}
exports.default = ASTDispatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N3ZWV0L2FzdC1kaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTSxhQUFOLENBQW9CO0FBQ2pDLGNBQVksU0FBWixFQUF1QixpQkFBdkIsRUFBMEM7QUFDeEMsU0FBSyxjQUFMLEdBQXNCLGlCQUF0QjtBQUNBLFNBQUssTUFBTCxHQUFjLFNBQWQ7QUFDRDtBQUNELFdBQVMsT0FBVCxFQUFrQjtBQUNoQixRQUFJLFdBQVcsS0FBSyxNQUFMLEdBQWMsUUFBUSxJQUFyQztBQUNBLFFBQUksT0FBTyxLQUFLLFFBQUwsQ0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4QyxhQUFPLEtBQUssUUFBTCxFQUFlLE9BQWYsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLENBQUMsS0FBSyxjQUFWLEVBQTBCO0FBQy9CLGFBQU8sT0FBUDtBQUNEO0FBQ0QsVUFBTSxJQUFJLEtBQUosQ0FBVyxnQ0FBOEIsUUFBUyxHQUFsRCxDQUFOO0FBQ0Q7QUFiZ0M7a0JBQWQsYSIsImZpbGUiOiJhc3QtZGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTVERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihwcmVmaXhfMTYsIGVycm9ySWZNaXNzaW5nXzE3KSB7XG4gICAgdGhpcy5lcnJvcklmTWlzc2luZyA9IGVycm9ySWZNaXNzaW5nXzE3O1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4XzE2O1xuICB9XG4gIGRpc3BhdGNoKHRlcm1fMTgpIHtcbiAgICBsZXQgZmllbGRfMTkgPSB0aGlzLnByZWZpeCArIHRlcm1fMTgudHlwZTtcbiAgICBpZiAodHlwZW9mIHRoaXNbZmllbGRfMTldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB0aGlzW2ZpZWxkXzE5XSh0ZXJtXzE4KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmVycm9ySWZNaXNzaW5nKSB7XG4gICAgICByZXR1cm4gdGVybV8xODtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGltcGxlbWVudGF0aW9uIGZvcjogJHtmaWVsZF8xOX1gKTtcbiAgfVxufVxuIl19