# Syntax Binding Forms


## `syntax`

```js
syntax $($name:id = $init:expr) (,) ...
```

Similar to how the keywords `var`, `let`, and `const` bind *run-time* values in JavaScript, sweet.js provides a way to bind *compile-time* values via the keyword `syntax`. The binding created by `syntax` is analogous to `let` and applies to the code following the binding.

Any JavaScript value[^1] can be bound via `syntax`:

```js
syntax compiletimeNumber = 42
syntax compiletimeString = "foobar"
```

A function bound by `syntax` is called a [*syntax transformer*](syntax-transformers.md). When a binding to a syntax transformer appears in the source text, the syntax transformer is invoked.

```js
syntax inc = function (ctx) {
  let x = ctx.next().value;
  return #`${x} + 1`;
}
inc 100
```

## `syntaxrec`

```js
syntaxrec $($name:id = $init:expr) (,) ...
```

The `syntaxrec` form is identical to the `syntax` form except the name bound by `syntaxrec` is also bound in the initializer. This enables recursive definitions.

---

[^1]: Currently, sweet.js does not provide a means of retrieving non-function values from a compile-time binding so this point is somewhat academic. Making use of non-function compile-time values will come eventually.