# Session Service

> Work in progress.

This service is for creating, managing and deleting sessions. The purpose is to
enable multi-user sessions, mapping different user controls. Session data is
stored in Firebase, and are periodically polled by `sessionId` for deletion. It
communicates with the `emulation-service` to spin up a new Docker container and
stores the corresponding video stream and socket endpoints.

## API Reference

`POST /create-session`

Body:
```
{
    consoleId: String,
    gameTitle: String,
    romUrl: URL
}
```

Creates a new session, provided the information related to the game
(`consoleId`, `title`, `romUrl`). This communicates with the
`emulation-service` to spin up a new Docker container with the given console
and ROM loaded. The `emulation-service` responds with the `streamUrl` for
clients to get the video stream and `socketUrl` for clients to send controls
to directly.

This creates a new entry in Firebase:
```
sessions: {
    [sessionId]: {
        emulation: {
            streamUrl
            socketUrl
        }
        game: {
            consoleId
            title
            romUrl
        }
        users: {
            maxPlayerNumber
            [userId]: {
                playerNumber
                keyMapping
            }
        }
    }
}
```

`GET /session/:sessionId`

Retrieves the session by `sessionId`.
