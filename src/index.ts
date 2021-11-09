import { v4 as uuidv4 } from 'uuid'

const uuid = uuidv4()

console.log(`I am ${uuid}`)

const bc = new BroadcastChannel('eds_channel')

bc.onmessage = (event: MessageEvent<string>) => console.log('Received event', event)

bc.postMessage(`Hi from ${uuid}`)

setInterval(() => {
  bc.postMessage(`Hi from ${uuid}`)
}, 5000)