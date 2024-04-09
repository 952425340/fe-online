<template>
    <div>
        <div>
            <input type="text" v-model="data.name" @input="inputHandler">
            <table cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data.list" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, defineExpose } from 'vue';
import userApi from '../api/user';

let data = reactive<any>({
    list: [],
    name: '',
});

let timeout:any = null;
let timer;
let flag:any;
function throttle(fn: any, wait = 500, immediate = true) {
    if (immediate) {
        if (!flag) {
            flag = true;
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof fn === 'function' && fn();
            timer = setTimeout(() => {
                flag = false;
            }, wait);
        }
    } else if (!flag) {
        flag = true
        timer = setTimeout(() => {
            flag = false;
            typeof fn === 'function' && fn();
        }, wait);
    }
}
function debounce(fn:any, wait = 500, immediate = false) {
    if (timeout !== null) clearTimeout(timeout)
    if (immediate) {
        const callNow = !timeout
        timeout = setTimeout(() => {
            timeout = null;
        }, wait);
        if (callNow) typeof fn === 'function' && fn();
    } else {
        timeout = setTimeout(() => {
            typeof fn === 'function' && fn();
        }, wait);
    }
}


function inputHandler() {
    throttle(()=> {
        getData(1);
    }, 500);
    debounce(getData, 1000);
}
function getData(id) {
    userApi.query({
        name: data.name,
    }).then((users) => {
        data.list = users;
    })
}
function updateData() {
    debounce(getData, 1000);
}
defineExpose({
    updateData,
});
</script>
<style scoped>
table {
    
}
 th,td {
    border: 1px solid #aaa;
    margin: 0;
    padding: 0;
 }
</style>