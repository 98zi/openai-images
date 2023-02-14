<script setup>
import { initCustomFormatter, ref } from 'vue';

import { useImageStore } from "./stores/ImageStore"
import { onMounted } from 'vue';
const ImageStore = useImageStore();
const disabled = ref(false);
const state = ref("Generate An Image 🪷")

var prompt1 = ref();
var show = ref(true)
async function search() {
	// 判断是否输入了 apiKey
	if (prompt1.value == undefined) {
		show.value = false;
		prompt1.value = "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";
	}

	const apiKeyValue = prompt1.value;

	disabled.value = true;
	ImageStore.data = null;
	state.value = "正在生成中..."
	try {
		await ImageStore.getImage(prompt.value, apiKeyValue);
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
		<p class="notice">请勿滥用免费额度，可以填写自己 OpenAi ApiKey</p>
		<input v-show="show" v-model="prompt1" class="app-input" type="text" placeholder="OpenAi ApiKey(无apikey留空)">
		<textarea v-model="prompt" :disabled="disabled" autofocus @keyup.enter="search()" class="app-textarea" id="text"
			placeholder="(请勿留空)输入你的描述如: 星空下的梵高"></textarea>
		<button @click="search()">生成图像</button>
		<LoadingIndicator v-if="disabled" />
		<!-- 输出图像 -->
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
