<script setup>
import { initCustomFormatter, ref } from 'vue';

import { useImageStore } from "./stores/ImageStore"
import { onMounted } from 'vue';
const ImageStore = useImageStore();
const disabled = ref(false);
const state = ref("Generate An Image 🪷")


async function search() {
	disabled.value = true;
	ImageStore.data = null;
	state.value = "正在生成中..."
	try {
		await ImageStore.getImage(prompt.value);
		disabled.value = false;
	}
	catch (err) {
		console.log(err);
	}
}

var prompt = ref();

</script>

<template>
	<div class="app-main">
		<h2>Open AI 图像生成</h2>
		<textarea v-model="prompt" :disabled="disabled" autofocus @keyup.enter="search()" class="app-input" id="text" placeholder="(请勿留空)输入你的描述: 星空下的梵高"></textarea>
		<button @click="search()">生成图像</button>
		<LoadingIndicator v-if="disabled" />
		<!-- 循环 -->
		<div class="imgs-container" v-if="ImageStore.data">
			<transition-group appear name="list">
				<img v-for="img in ImageStore.data " :key="img.url" :src="img.url" alt="">
			</transition-group>
		</div>
		<div class="div-loading" v-else>
			<p>{{ state }}</p>
		</div>
	</div>
</template>
