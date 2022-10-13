import { createSignal, onMount } from "solid-js";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import {javascript} from "@codemirror/lang-javascript"

const CodeEditor = () => {
  let container: HTMLDivElement;
  onMount(() => {
    let myView = new EditorView({
      doc: "hello",
      extensions: [keymap.of(defaultKeymap), javascript()],
      parent: container,
    });
  });
  return <div ref={container}></div>;
}

export default CodeEditor