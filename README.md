## OpenAi Images

基于 openai api 生成图像，可以输入详细的描述语句，支持中英文。

### 1. 如何获取 openai Api 密钥？

注册 https://openai.com 账号。

在 https://platform.openai.com/docs/quickstart/add-your-api-key 页面点击 `Create new secret key` 获取密钥。

在项目根目录下新建 `.env` 文件，输入：

```env
VITE_apiKey = "xx-xxxxxxxxxxxxxxxxx"
```

### 2. 使用项目

下载项目并安装依赖，执行 `npm run dev` 命令运行。

```
git clone https://github.com/zoer98/openai-images.git
cd openai-images
npm install
npm run dev
```

浏览器打开 `http://127.0.0.1:1998/openai-images` 即可。

### 3. 相关配置

```js
// ImageStore.js
this.image = await openai.createImage({
  // ...
  n: 2,               // 图片数量
  size: "1024x1024",  // 图片尺寸
});
```

### 4. 视频演示

https://telegra.ph/file/ae5c448796ed7439b4ff0.mp4


### 5. 感谢文档

[https://platform.openai.com](https://platform.openai.com)
