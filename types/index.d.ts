/** The message the cold-cache guard is holding, drawn as a card above the prompt box until the person chooses. */
export type Held = {
  /** The text the person typed, resent as their own words on "Pay and send". */
  text: string
  /** How long the cache had been cold when the message was held, in milliseconds. */
  coldMs: number
  /** The context the cold send re-writes, in tokens. */
  tokens: number
  /** The estimated price of that re-write, null when the model is unpriced. */
  coldUsd: number | null
  /** What the same turn would have cost on a warm cache, null when unpriced. */
  warmUsd: number | null
}

declare module 'claude-code' {
  interface PluginState {
    'cache-tax': { held: Held | null }
  }
}
