<template>
    <div></div>
</template>


<script>
import Quill from "quill";
window.Quill = Quill
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
    name: "CreatedPost",    
};
</script>

<style></style>