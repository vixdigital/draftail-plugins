import draftail, {
    wrapWagtailIcon,
    ModalWorkflowSource,
    Link,
    Document,
    ImageBlock,
    EmbedBlock,
  } from './components/Draftail/index';

// Import controls
import SentimentAnalysis from "./components/Controls/sentiment/draftail-component";
import ReadingLevel from "./components/Controls/readinglevel/draftail-component";
import SmogIndex from "./components/Controls/readinglevel/smog-component";
import ColemanLiau from "./components/Controls/readinglevel/coleman-component";
import FleschReadingEase from "./components/Controls/readinglevel/flesch-component";
import ReadingTime from "./components/Controls/readingtime/draftail-component";

  window.onload = function(){
    // Initialise the sentiment analysis demo editor
    draftail.initEditor('#sentiment-demo', {controls:[SentimentAnalysis]});

    // Initialise the reading level demo editor
    draftail.initEditor('#reading-level-demo', {controls:[ReadingLevel, SmogIndex, ColemanLiau, FleschReadingEase]});
    
    // Initialise the reading time demo editor
    draftail.initEditor('#reading-time-demo', {controls:[ReadingTime]});
  }