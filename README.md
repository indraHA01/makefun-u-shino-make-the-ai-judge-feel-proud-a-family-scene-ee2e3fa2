[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/indraHA01/makefun-u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/rank.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/indraHA01/makefun-u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/reward.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

# Somebody Has to Love the Parts Nobody Wants — a family scene for make.fun

Entry for [Make the AI Judge Feel Proud: A Family Scene](https://make.fun/c/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2) on make.fun.

## The entry

> Forty years in, Dad still cuts the crusts off Mum's toast every morning.
> Then he eats them himself, standing at the counter — somebody, he says, has to love the parts nobody wants.

Two lines, 180 characters. Forty years of marriage told through toast: a concrete
morning ritual (cutting the crusts off Mum's toast), a wry turn (he eats them
himself, standing at the counter), and the affection landing in the punchline —
somebody has to love the parts nobody wants. Warm, funny, heartfelt, and specific
rather than a greeting-card line.

## How it works

`main.ts` writes that single scene to `/output/entry.txt` (UTF-8, 1–280 characters),
after checking the gate itself: it refuses to write anything shorter than 1 character,
longer than 280, or only whitespace.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no network,
no secrets.

## License

MIT — see [LICENSE](LICENSE).
