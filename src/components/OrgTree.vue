<template>
    <div class="tree-wrapper">
        <OrgTree :data="treeData.data" @treeClick="treeClickHandler" />
    </div>
</template>
<script setup lang="ts">
    import { reactive, onMounted, defineEmits } from 'vue';
    import orgApi from '../api/org';
    import OrgTree from './TreeCom.vue';

    let emits = defineEmits(['switch']);

    let treeData = reactive<any>({
        data: [],
    });

    function treeClickHandler(item: any) {
        orgApi.query(item.id).then((org) => {
            item.children = [...org];
        })
        emits('switch', item.id);
    }
    function getData() {
        orgApi.query().then((org: any) => {
            if (org.length <= 0) {
                getData();
                return;
            }
            treeData.data.push(...org);
            emits('switch', org[0].id);
        })
    }
    onMounted(() => {
        getData();
    });
</script>
<style scoped>
    .tree-wrapper {
        width: 200px;
        background: gray;
    }
</style>