# ModelAirportGTC Visualization

## next()

```
                      |
                      |
                      v
            *********************                  *********************
            *                   *<-----------------*                   *
    +------>*  Move Aircraft 1  *                  *  Move Aircraft 2  *
    |       *                   *----------------->*                   *
    |       *********************                  *********************
    |                 |
    |                 |
    +-----------------+


```
## next(command)

```
                      |
        +-----+       |                                             +------+
        |     |       |                                             |      |
        |     v       v                                             v      |
        |   *********************                  *********************   |
        +---*                   *<-----------------*                   *   |
            *  Move Aircraft 1  *                  *  Move Aircraft 2  *---+
            *                   *----------------->*                   *
            *********************                  *********************
                  ^  |                                    |  ^
                  |  |                                    |  |
                  |  |                                    |  |
                  |  |                                    |  |
                  |  |                                    |  |
                  |  +------->*******************         |  |
                  |           *                 *<--------+  |
                  +-----------*  Toggle Lights  *            |
                              *                 *------------+
                              *******************
                                    |     ^
                                    |     |
                                    +-----+
```

* More states can be added as long as the added state has input/output connections to all existing states including itself