MonoCalendar
============

MonoCalendar is a minimalist React calendar component.  Currently, it just handles 
displaying a calendar, set to the current day, with forward and back buttons to 
navigate through months. 

MonoCalendar is intended to be a neutral calendar component so that you can add to
it whatever you like. 

MonoCalendar uses CSSGrid for responsiveness, and so it fits nicely in almost any
sized container.  

It's got a modest 'card-like' design (that can of course be overridden), and will 
fill the space of whatever container you put it in.  If you need to make the 
MonoCalendar component a fixed size, you can set this in your styles:

```
div#Calendar { max-width: 300px }
```

Which will get you something like this (Note -- screenshot taken on a Retina Mac):

![300px wide (Retina)](https://i.imgur.com/yWWYoRb.png)

For funsies, I originally created this whole thing on CodePen instead of starting 
the project with `npm init`, so the repo is a bit clumsy, but the tradeoff is 
that if you want, you can 
[play with this on CodePen.io](https://codepen.io/bmelton/full/OEOJaR/) and see if
you like it before committing, or fork your own to learn how to build your own.

