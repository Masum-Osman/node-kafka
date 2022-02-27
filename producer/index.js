console.log("publisher...");
// import Kafka from 'node-rdkafka'
// const Kafka = require('node-rdkafka')
var Kafka = require('node-rdkafka');

const stream = Kafka.Producer.CreateWriteStream({
    'metadata.broker.list' : 'localhost:9092'
}, {}, {
    topic: 'test'
})

stream.on('error', (err) => {
    console.error("Error in Stream")
    console.error(err)
})

setTimeout(() => {
    queueMessage();
}, 1500);

function queueMessage() {
    const resulr = stream.write(Buffer.from('hi...'))
    console.log(result);
}