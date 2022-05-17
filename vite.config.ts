/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-17 16:42:27
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-17 17:47:48
 * @FilePath: /andeng-largescreen-merge/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
});
