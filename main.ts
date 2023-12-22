basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
