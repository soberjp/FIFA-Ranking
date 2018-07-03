
export function chart() {

    var d3 = require('d3');
    var c3 = require('c3');

    c3.generate({
        size: {
            height: 600
        },
        data: {
            // データ格納
            columns: [
                ['日本', 43,29,19,22,47,54,53,45,57,61],
                ['ベルギー', 66,57,41,21,11,4,1,5,5,3],
                ['コロンビア', 39,48,36,5,4,3,8,6,13,16],
                ['ポーランド', 58,73,66,55,76,41,34,15,7,8],
                ['セネガル', 89,70,44,77,65,35,44,33,23,27]
            ],
            type: 'spline'
        },
        // 軸設定
        axis: {
            // 年表示
            x: {
                type: 'category',
                categories: ['2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年']
            },
            // 順位表示
            y: {
                // 逆順表示
                inverted: true,
                // 左ラベル
                label: {
                    text: '順位',
                    position: 'outer-middle'
                }
            }
        },
        // グリッド追加
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
        // ツールチップで順位表示
        tooltip: {
            format: {
                value: function (value) {
                    return d3.format(',')(value) + "位";
                }
            }
        },
        // ポイント表示
        point: {
            show: true
        }
    });

}
