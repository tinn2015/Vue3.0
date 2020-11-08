// App.vue
<template>
    <Suspense>
        <template #default>
            <SomeComponent />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import { defineComponent } from "vue";
import SomeComponent from './SomeComponent.vue';

export default defineComponent({
    name: "App",
    
    components: {
        SomeComponent
    }
});
</script>
