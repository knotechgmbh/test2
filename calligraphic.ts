
// Gib deinen Code hier ein


//% weight=100 color=#0fbc11 icon="\uf108"
namespace LCD {
    let k_FrontColor = 65535;
let k_BackColor = 0;
let k_Switch = 0;
    control.inBackground(() => {
        while (true) {
            let ZeitText = serial.readUntil("}")
            if (ZeitText[0] == "{") {
                if (ZeitText[1] == "S") {
                    k_Switch = parseInt(ZeitText[2])
                }
                if (ZeitText[1] == "s"){
                    k_Switch = 0
                }
            }
            //basic.setLedColor(Colors.Red)
            basic.pause(10)
            //basic.setLedColor(Colors.Green)
        }
    })

    //control.inBackground(() => {
    //    while (true) {
    //        music.playTone(262, music.beat(BeatFraction.Whole))
    //        basic.pause(1000)
    //    }
    //})

    //% block
    export function k_GetButton(): number {
           return k_Switch
    }

    //% block
    export function k_InitLcd() {
        serial.redirect(
            SerialPin.C17,
            SerialPin.C16,
            BaudRate.BaudRate115200
        )
    }


    //% block
    export function k_ClrLcd() {
        serial.writeString("{BX0Y0C0W320H240}");
    }

    //% block
    //% inlineInputMode=inline
    export function k_TextLcd(xCoord: number, yCoord: number, font: number, text: string) {
        let lcdText = "{TX";
        lcdText = lcdText + xCoord;
        lcdText = lcdText + "Y" + yCoord;
        lcdText = lcdText + "C" + k_FrontColor;
        lcdText = lcdText + "F" + font;
        lcdText = lcdText + ":" + text + "}";
        serial.writeString(lcdText);
    }

    //% block 
    export function k_SetColor(backColor: number, frontColor: number) {
        k_FrontColor = frontColor;
        k_BackColor = backColor;
    }

    //% block
    export function k_CalcColor(red: number, green: number, blue: number): number {
        let color = 0;
        // red: 0..31, green: 0..63, blue: 0..31

        red = red * 31 / 100;
        green = green * 63 / 100;
        blue = blue * 31 / 100;

        color = 2048 * red + 32 * green + blue;
        return color;
    }

    //% block
    export function k_Box(xCoord: number, yCoord: number, width: number, height: number) {
        let lcdText = "{BX";
        lcdText = lcdText + xCoord;
        lcdText = lcdText + "Y" + yCoord;
        lcdText = lcdText + "W" + width;
        lcdText = lcdText + "H" + height;
        lcdText = lcdText + "C" + k_FrontColor + "}";
        serial.writeString(lcdText);
    }

    //%block
    export function k_Button(id: number, xCoord: number, yCoord: number, width: number, height: number) {
        let lcdText = "{SN"
        k_Box(xCoord, yCoord, width, height)
        lcdText = lcdText + id
        lcdText = lcdText + "X" + xCoord
        lcdText = lcdText + "Y" + yCoord
        lcdText = lcdText + "W" + width
        lcdText = lcdText + "H" + height
        lcdText = lcdText + "}"
        serial.writeString(lcdText);
    }

    function bargraph() {
        let Text_X1 = ""
        let Text_Y1 = ""
        while (true) {
            //BeschlX = input.acceleration(Dimension.X)
            //Text_X = "{TX0Y32C63719F1:" + BeschlX
            //Text_X = "" + Text_X + "    }"
            //serial.writeString(Text_X)
            //Breite = BeschlX / 7
            //if (BeschlX >= 0) {
            //    Xpos = 160
            //} else {
            //    Xpos = 160 + Breite
            //    Breite = Math.abs(Breite)
            //}
            //serial.writeString(Text_X1)
            //Text_X1 = "" + Xpos + "W"
            //Text_X1 = "" + Text_X1 + Breite
            //Text_X1 = "" + Text_X1 + "}"
            //Text_X = "{BY96C63488H6X" + Text_X1
            //serial.writeString(Text_X)
            //Text_X1 = "{BY96C0H6X" + Text_X1
            //BeschlY = input.acceleration(Dimension.Y)
            //Text_Y = "{TX0Y160C2016F1:" + BeschlY
            //Text_Y = "" + Text_Y + "    }"
            //serial.writeString(Text_Y)
            //Breite = BeschlY / 7
            //if (BeschlY >= 0) {
            //    Xpos = 160
            //} else {
            //    Xpos = 160 + Breite
            //    Breite = Math.abs(Breite)
            //}
            //serial.writeString(Text_Y1)
            //Text_Y1 = "" + Xpos + "W"
            //Text_Y1 = "" + Text_Y1 + Breite
            //Text_Y1 = "" + Text_Y1 + "}"
            //Text_Y = "{BY224C2016H6X" + Text_Y1
            //serial.writeString(Text_Y)
            //Text_Y1 = "{BY224C0H6X" + Text_Y1
            //basic.pause(200)
        }

    }
}