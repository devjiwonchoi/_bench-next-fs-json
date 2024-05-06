# dev

## pre-build as json + dynamic import

### First Attempt

3 ms  Loading
278 ms  Scripting
2 ms  Rendering
1 ms  Painting
153 ms  System
567 ms  Idle
1003 ms  Total

### Second Attempt

3 ms  Loading
263 ms  Scripting
2 ms  Rendering
1 ms  Painting
78 ms  System
560 ms  Idle
906 ms  Total

### Third Attempt

2 ms  Loading
253 ms  Scripting
2 ms  Rendering
1 ms  Painting
114 ms  System
223 ms  Idle
595 ms  Total

### Average

3 ms  Loading
264 ms  Scripting
2 ms  Rendering
1 ms  Painting
115 ms  System
450 ms  Idle
835 ms  Total

## fs + matter on the fly

### First Attempt

3 ms  Loading
270 ms  Scripting
1 ms  Rendering
1 ms  Painting
86 ms  System
1085 ms  Idle
1445 ms  Total

### Second Attempt

3 ms  Loading
264 ms  Scripting
1 ms  Rendering
1 ms  Painting
119 ms  System
1099 ms  Idle
1487 ms  Total

### Third Attempt

3 ms  Loading
283 ms  Scripting
2 ms  Rendering
1 ms  Painting
79 ms  System
1085 ms  Idle
1453 ms  Total

### Average

3 ms  Loading
272 ms  Scripting
1 ms  Rendering
1 ms  Painting
95 ms  System
1090 ms  Idle
1461 ms  Total

## Result

prebuild + dynamic import is faster than fs + matter on the fly by 626 ms on average

# prod

## pre-build as json + dynamic import

### First Attempt

2 ms  Loading
349 ms  Scripting
2 ms  Rendering
1 ms  Painting
78 ms  System
565 ms  Idle
997 ms  Total

### Second Attempt

3 ms  Loading
375 ms  Scripting
2 ms  Rendering
1 ms  Painting
54 ms  System
567 ms  Idle
1002 ms  Total

### Third Attempt

2 ms  Loading
374 ms  Scripting
2 ms  Rendering
1 ms  Painting
46 ms  System
672 ms  Idle
1096 ms  Total

## fs + matter on the fly

### First Attempt

3 ms  Loading
349 ms  Scripting
1 ms  Rendering
1 ms  Painting
102 ms  System
568 ms  Idle
1023 ms  Total

### Second Attempt

3 ms  Loading
268 ms  Scripting
1 ms  Rendering
1 ms  Painting
56 ms  System
1076 ms  Idle
1405 ms  Total

### Third Attempt

3 ms  Loading
374 ms  Scripting
1 ms  Rendering
1 ms  Painting
55 ms  System
672 ms  Idle
1106 ms  Total

## Result

prebuild + dynamic import is faster than fs + matter on the fly by 344 ms on average
