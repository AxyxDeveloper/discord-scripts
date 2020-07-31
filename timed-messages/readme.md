# How to add more messages
```
    var timedmessages = {
        "1": {
            "server": {
                "guild": "your server id",
                "channel": "the channel id"
            },
            "interval": "Time in MILLISECONDS",
            "message": "your message here"
        }
        "2": {
            "server": {
                "guild": "your server id",
                "channel": "the channel id"
            },
            "interval": "Time in MILLISECONDS",
            "message": "your message here"
        }
    }
    var messages = ["1", "2]
```
Add a new timedmessage object
```
"a random number, can't be the same from another. add this number to the \"Messages\"": {
       "server": {
           "guild": "your server id",
            channel": "the channel id"
        },
        "interval": "Time in MILLISECONDS",
        message": "your message here"
}```
Add a new messages object
```
var messages = [<previous stuff>, "number"]
