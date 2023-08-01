/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-08-01 10:37:56
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-08-01 10:39:28
 * @FilePath: \bestTools\direct\onClickRemoveClass.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Directive, DirectiveBinding } from "vue";
/**
 * @description 📚 点击元素移除指定类名
 * @param  {array} 需要移除类名的数组
 * @docs  v-remove-class 其中repeat表示元素离开可视区域后会自动将添加的类名卸载掉
 * 页面内直接使用
 *    <div v-remove-class="['class1', 'class2']">点 击我去除 class1 和 class2</div>
 **/

const removeClassDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const classNames = binding.value;
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Element && classNames) {
        if (Array.isArray(classNames)) {
          classNames.forEach(className => {
            el.classList.remove(className);
          });
        } else {
          el.classList.remove(classNames);
        }
      }
    };

    el.addEventListener("click", handleClick);
  },
};

export default removeClassDirective;
