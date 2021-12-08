const s = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

export const guid = () => `${s()}${s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`