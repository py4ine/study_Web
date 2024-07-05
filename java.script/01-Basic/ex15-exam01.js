// 수를 입력 받아 1부터 입력 받은 수까지 홀수의 합을 반환하는 함수

function sum_of_odds(value) {
    let odd = 0;
    for ( let i=1 ; value>=i ; ++i) {
        if (i % 2 != 0) {
            odd += i;
        }
    }
    return odd;
}
console.log(sum_of_odds(10));


// 인자로 n을 전달하면 n에 대한 절대값을 반환하는 함수
function abs_value(n) {
    n = Math.abs(n)
    return n
}
console.log(abs_value(-25));


// cm값을 inch 값으로 반환하는 함수 (1inch == 2.54cm)
function cm_to_inch (cm) {
    inch = cm / 2.54
    return inch
}
console.log(cm_to_inch(2.54))


// 파일의 용량(byte)을 매개변수로 입력 받아 bit단위로 반환하는 함수
// 파일의 용량을 입력할 때 단위도 입력한다. (G,M,K)
// ex) byteToBit(32,'g'); byteToBit(64,'M');
function byte_to_bit(byte, unit='B') {
    if (unit == 'B') {
        bit = byte * 8;
    } else if (unit == 'K') {
        bit = byte * 8192;
    } else if (unit == 'M') {
        bit = byte * 8388608;
    } else if (unit == 'G') {
        bit = byte * 8.5899e+9;
    } else if (unit == 'T') {
        bit = byte * 8.7961e+12;
    } else {
        bit = "계산한도초과"
    }       
    return bit
}
console.log(byte_to_bit(1, 'G'))


// 다음 내용을 참고하여 비만도를 측정하는 프로그램을 작성하시오.
// 표준체중(kg) = (현재신장cm - 100) x 0.9
// 비만도(%) = (현재체중 / 표준체중) x 100
// 오른쪽 표에 따라 판정 결과까지 함수를 활용

function ob_converter(v) {
    if (v < 80) {
        convert = "저체중";
    } else if (v < 90) {
        convert = "경한저체중";
    } else if (v <110) {
        convert = "정상체중";
    } else if (v < 120) {
        convert = "과체중";
    } else if (v < 130) {
        convert = "경도비만";
    } else if (v < 150) {
        convert = "중증도비만";
    } else if (v < 200) {
        convert = "고도비만";
    } else if ( v >= 200) {
        convert = "위험한비만";
    } else {
        convert = "입력한 수치에 이상이 있습니다.";
    }
    return convert
}

function obesity(h, w) {
    let standard_weight = (h - 100) * 0.9;
    let obesity_rate = (w / standard_weight) *100;
    return ob_converter(obesity_rate);
}
console.log(obesity(186, 65));
