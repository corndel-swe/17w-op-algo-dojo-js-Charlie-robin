import Benchmark from "benchmark";
import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { mergeSort } from "./merge.js";
import { quickSort } from "./quick.js";
import { randArray } from "../utils.js";

const xl = randArray(10_000);
const l = randArray(1000);

const suite = new Benchmark.Suite();

suite
  .add("Bubble Sort 1000", () => {
    bubbleSort([...l]);
  })
  .add("Insertion Sort 1000", () => {
    insertionSort([...l]);
  })
  .add("Merge Sort 1000", () => {
    mergeSort([...l]);
  })
  .add("Quick Sort 1000", () => {
    quickSort([...l]);
  })
  .add("Bubble Sort 10_000", () => {
    bubbleSort([...xl]);
  })
  .add("Insertion Sort 10_000", () => {
    insertionSort([...xl]);
  })
  .add("Merge Sort 10_000", () => {
    mergeSort([...xl]);
  })
  .add("Quick Sort 10_000", () => {
    quickSort([...xl]);
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .run({ async: true });
