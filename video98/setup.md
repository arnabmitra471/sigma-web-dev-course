# How to setup Tailwind CSS

**Step1:** Run the following commands

```shell
npm install -D tailwindcss
npx tailwindcss init
```

**Step 2:** 

Update tailwind.config.js file to include this line

```js
    content: ["*.html"]
```

**Step 3:**

Add the tailwind directives for each of the Tailwind's layers by creating src/input.css

```CSS
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

**Step 4:** 
Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

```shell
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

**Step 5:**
Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.
