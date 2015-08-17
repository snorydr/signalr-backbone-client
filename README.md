# SignalR Backbone Client

This is the client side source code which displays a list of countdown timers (created manually using POST as described below), syncs on push notifications from the server triggered by those timers, and updates the UI based on those push notifications.

## API support

### Create a timer

```
POST /api/debug/pushtimer
```
Payload:
```
{
"id":"MyTimer1",
"startDelay":10,  // How long before timer pushes first notification, in seconds
"interval":2,     // How long between subsequent push notification, in seconds
"count":18        // How many notifications timer should push before self-destructing
}
```
There is currently no UI in the project to start a timer. POST must be sent manually using a raw HTTP client.

### See all active timers

```
GET /api/debug/pushtimer
```
Sample response:
```
{
 "id": "MyTimer1",
 "createdOn": "2015-08-16T23:54:04.5420496Z",  // Time of timer creation
 "updatedOn": "2015-08-16T23:54:29.5725256Z",  // Time last notification was pushed by server
 "countDown": 14   // How many more notifications to expect
}
```
This same object is included in the push notifications.
