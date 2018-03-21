import draftail, {
    wrapWagtailIcon,
    ModalWorkflowSource,
    Link,
    Document,
    ImageBlock,
    EmbedBlock,
  } from './components/Draftail/index';

  window.onload = function(){
    draftail.initEditor('#test', {});
  }