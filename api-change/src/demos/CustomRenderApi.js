// App.js
import { defineComponent, h } from 'vue';

export default defineComponent({
    render() {
        return h('Article', {
            onClick() {
                console.log('点击文章');
            }
        }, [
            h('Title', { align: 'center' }, '这是文章标题')
        ]);
    }
});

// main.js
import { createRenderer } from 'vue';
import App from './App.js';
import './assets/index.css';

const { createApp } = createRenderer({
    createElement(type) {
        let nodeType = 'div';

        switch(type) {
            case 'Article': nodeType = 'article'; break;
            case 'Title': nodeType = 'h1'; break;
            case 'Content': nodeType = 'p'; break;
        }

        return document.createElement(nodeType);
    },
    insert(child, parent, anchor) {
        parent.insertBefore(child, anchor || null);
    },
    setElementText(node, text) {
        node.textContent = text;
    },
    patchProp(el, key, prevValue, nextValue) {
        console.log(el, key, prevValue, nextValue);

        switch(key) {
            case 'onClick':
                el.addEventListener('click', nextValue);
                break;
            default:
                el.setAttribute(key, nextValue);
        }
    }
});

createApp(App).mount(document.querySelector('#app'));