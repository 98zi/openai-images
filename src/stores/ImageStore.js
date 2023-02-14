import { defineStore } from "pinia";
import { Configuration, OpenAIApi } from "openai";

export const useImageStore = defineStore('ImageStore', {
	state: () => ({
		Image: null,
		name: "Mehdi",
		data: null
	}),
	actions: {
		async getImage(value,apiKeyValue) {
			const configuration = new Configuration({
				// apiKey: import.meta.env.VITE_apiKey,
				apiKey: apiKeyValue,
			});
			const openai = new OpenAIApi(configuration);
			this.image = await openai.createImage({
				prompt: value,
				n: 1,
				size: "1024x1024",
			});
			this.data = this.image.data.data;
			console.log(this.data)
		}
	},
	getters: {
	}
})