# Reproduce the bug

On iOS:

- navigate to B
- see the input on the bottom
- navigate to C
- see the input still here on C page for ~ 0.5sec (Bug n°1)
- see the input going hiden then
- navigate back
- the input is gone (Bug n°2)

## next steps

- go to `fix/bug-2`, do `yarn` and recompile to fix the bug n°2
- (no working, wip) go to `fix/bug-1`, do `yarn` and recompile to fix the bug n°1
