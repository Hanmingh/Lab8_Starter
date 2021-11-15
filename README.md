# Lab 8 - Starter
# Hanming Hu

### 1) I'll choose the first option: Within a Github action that runs whenever code is pushed. The reason is we can check if there is an error for every update and it execute quickly. Running them all after development is completed cannot let us know which specific part goes wrong, and manual running test is not part of automated tests.

### 2) No.

### 3) I would not use a unit test to test the “message” feature, because it might contains multiple components (like write function and send function), which makes it hard to do unit testing.

### 4) Yes. Because just checking the message length is an independent function, which can be tested using unit test.