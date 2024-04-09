<template>
    <div class="tree-wrapper">
        <ul class="tree-ul">
            <li class="tree-li" v-for="item in data" :key="item.id">
                <div @click="addTreeHandler(item)">
                    {{ item.name }}
                </div>
                <div v-if="item.children && item.children.length > 0">
                    <OrgTree :data="item.children" @treeClick="treeClickHandler" />
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'OrgTree',
    props: {
        data: {
            type: Object
        }
    },
    setup(props, { emit }) {
        function addTreeHandler(item: any) {
            emit('treeClick', item);
        }
        function treeClickHandler(item) {
            emit('treeClick', item);
        }
        return {
            addTreeHandler,
            treeClickHandler,
        }
    }
})
</script>
<style scoped>
    .tree-wrapper {
        width: 200px;
        background: gray;
        overflow: hidden;
    }
    .tree-ul {
        list-style: none;
        padding: 0;
        cursor: pointer;
    }
    .tree-li {
        margin-left: 10px;
    }
</style>