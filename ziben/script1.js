var _0xody = 'jsjiami.com.v7';
const _0x50550a = _0x27f0;
(function(_0x2c9ed8, _0x2cca5d, _0x456e12, _0x27c0c4, _0x5201d3, _0x37f87a, _0x41418c) {
    return _0x2c9ed8 = _0x2c9ed8 >> 0x2,
    _0x37f87a = 'hs',
    _0x41418c = 'hs',
    function(_0x264104, _0x5967c4, _0xd47d55, _0x4c5e06, _0x54f9d2) {
        const _0x47716c = _0x27f0;
        _0x4c5e06 = 'tfi',
        _0x37f87a = _0x4c5e06 + _0x37f87a,
        _0x54f9d2 = 'up',
        _0x41418c += _0x54f9d2,
        _0x37f87a = _0xd47d55(_0x37f87a),
        _0x41418c = _0xd47d55(_0x41418c),
        _0xd47d55 = 0x0;
        const _0x40d4b2 = _0x264104();
        while (!![] && --_0x27c0c4 + _0x5967c4) {
            try {
                _0x4c5e06 = parseInt(_0x47716c(0x36d, 'O6Yt')) / 0x1 + -parseInt(_0x47716c(0x419, 'FaYf')) / 0x2 + -parseInt(_0x47716c(0x32b, 'sLKY')) / 0x3 + -parseInt(_0x47716c(0x3c1, 'tJ)o')) / 0x4 * (-parseInt(_0x47716c(0x337, 'qOKW')) / 0x5) + parseInt(_0x47716c(0x392, 'x0!t')) / 0x6 * (-parseInt(_0x47716c(0x1fe, '96fm')) / 0x7) + parseInt(_0x47716c(0x281, 'GMbK')) / 0x8 * (-parseInt(_0x47716c(0x20f, 'N!!P')) / 0x9) + parseInt(_0x47716c(0x181, 'o4U1')) / 0xa * (parseInt(_0x47716c(0x406, 'VZ[O')) / 0xb);
            } catch (_0xd33c7) {
                _0x4c5e06 = _0xd47d55;
            } finally {
                _0x54f9d2 = _0x40d4b2[_0x37f87a]();
                if (_0x2c9ed8 <= _0x27c0c4)
                    _0xd47d55 ? _0x5201d3 ? _0x4c5e06 = _0x54f9d2 : _0x5201d3 = _0x54f9d2 : _0xd47d55 = _0x54f9d2;
                else {
                    if (_0xd47d55 == _0x5201d3['replace'](/[EFXlANgWhUYyLMJPxwSVp=]/g, '')) {
                        if (_0x4c5e06 === _0x5967c4) {
                            _0x40d4b2['un' + _0x37f87a](_0x54f9d2);
                            break;
                        }
                        _0x40d4b2[_0x41418c](_0x54f9d2);
                    }
                }
            }
        }
    }(_0x456e12, _0x2cca5d, function(_0x3b1766, _0x574dbe, _0x4d2f20, _0x2b4521, _0x23681d, _0x3d3512, _0x5ad51e) {
        return _0x574dbe = '\x73\x70\x6c\x69\x74',
        _0x3b1766 = arguments[0x0],
        _0x3b1766 = _0x3b1766[_0x574dbe](''),
        _0x4d2f20 = '\x72\x65\x76\x65\x72\x73\x65',
        _0x3b1766 = _0x3b1766[_0x4d2f20]('\x76'),
        _0x2b4521 = '\x6a\x6f\x69\x6e',
        (0x1a7d33,
        _0x3b1766[_0x2b4521](''));
    });
}(0x2fc, 0x1a4e6, _0x219c, 0xc1),
_0x219c) && (_0xody = 0x38a3);
const mainModal = document[_0x50550a(0x3c9, '9oCl')]('mainModal')
  , successModal = document[_0x50550a(0x2ed, 'pGJm')]('successModal')
  , exitModal = document['getElementById'](_0x50550a(0x2cd, 'X]Fq'))
  , startBtn = document[_0x50550a(0x1be, 'GMbK')]('startBtn')
  , exitBtn = document['getElementById']('exitBtn')
  , againBtn = document['getElementById'](_0x50550a(0x310, 'M2cx'))
  , backBtn = document[_0x50550a(0x28b, '(KC9')](_0x50550a(0x229, 'N!!P'))
  , shareBtn = document['getElementById'](_0x50550a(0x41a, 'Cj1u'))
  , moreLink = document[_0x50550a(0x19c, '3h)(')]('moreLink')
  , pageMoreLink = document['getElementById'](_0x50550a(0x339, 'PXd6'))
  , moreHint = document[_0x50550a(0x268, 'Cj1u')](_0x50550a(0x3bb, 'lG08'))
  , progressContainer = document['getElementById'](_0x50550a(0x30c, 'X]Fq'))
  , progressFill = document[_0x50550a(0x395, '8#xm')](_0x50550a(0x1bc, '68**'))
  , progressText = document['getElementById'](_0x50550a(0x3d6, 'N!!P'))
  , progressStatus = document[_0x50550a(0x2f2, '4&Zu')](_0x50550a(0x386, 'gO!@'))
  , bgMusic = document['getElementById']('bgMusic');
let musicStarted = ![]
  , audioContext = null;
const progressMessages = [_0x50550a(0x3e0, '68**'), _0x50550a(0x221, 'CmCt'), _0x50550a(0x346, 'x0*T'), _0x50550a(0x3e6, 'XK8k'), _0x50550a(0x1ef, '4&Zu'), _0x50550a(0x34a, 'pGJm'), '正在实施最终计划...', '做局即将完成...'];
function playBackgroundMusic() {
    const _0x2f47f1 = _0x50550a
      , _0x2d9a58 = {
        'ijhnR': _0x2f47f1(0x422, '68**'),
        'sTXtb': _0x2f47f1(0x1f0, '96fm'),
        'kqHbY': _0x2f47f1(0x253, 'CmCt'),
        'TWhUA': function(_0xa25c85, _0x2b7688) {
            return _0xa25c85 + _0x2b7688;
        },
        'wydyC': function(_0x1cd3ba, _0x4d6947) {
            return _0x1cd3ba + _0x4d6947;
        },
        'LzPsE': function(_0x3ac0e5, _0x1d4bd9) {
            return _0x3ac0e5 + _0x1d4bd9;
        },
        'PxSRk': function(_0x3c7f72, _0x3e0629, _0x31a14e) {
            return _0x3c7f72(_0x3e0629, _0x31a14e);
        },
        'svtAP': _0x2f47f1(0x1a3, '4&Zu'),
        'USVRX': _0x2f47f1(0x285, 'x0*T'),
        'ZufGr': function(_0x513b44, _0x3d07ba) {
            return _0x513b44 !== _0x3d07ba;
        },
        'qWNrO': function(_0x4781a8, _0x5de4c9) {
            return _0x4781a8 !== _0x5de4c9;
        },
        'Hbvbn': function(_0x3c5306, _0x6071d6) {
            return _0x3c5306 === _0x6071d6;
        },
        'swAbl': 'JDHbd',
        'UXTEM': '🔇\x20音频初始化失败:',
        'XWlTe': function(_0x57f866) {
            return _0x57f866();
        }
    };
    if (musicStarted)
        return;
    try {
        !audioContext && (_0x2d9a58[_0x2f47f1(0x205, 'x0!t')] === 'wuGBz' ? audioContext = new (window[(_0x2f47f1(0x261, 'VZ[O'))] || window[(_0x2f47f1(0x331, 'Cj1u'))])() : _0x682c37[_0x2f47f1(0x3d1, '(KC9')]());
        if (audioContext[_0x2f47f1(0x31b, 'G4zi')] === _0x2d9a58[_0x2f47f1(0x18e, 'pGJm')]) {
            if (_0x2d9a58[_0x2f47f1(0x2fb, 'BHYA')]('OoQWe', _0x2f47f1(0x393, 'kaAV')))
                audioContext['resume']();
            else {
                _0x462bcd();
                const _0x420458 = _0x2f47f1(0x2e9, 'Cj1u');
                _0x4f0581[_0x2f47f1(0x270, 'dakL')](_0x420458, _0x2d9a58['ijhnR']),
                _0x489319[_0x2f47f1(0x226, 'WQS(')](_0x2f47f1(0x35d, 'y^R4'));
            }
        }
        bgMusic[_0x2f47f1(0x2bc, '4Of$')] = 0.3;
        const _0xe3b7d1 = bgMusic[_0x2f47f1(0x241, 'x0!t')]();
        if (_0x2d9a58['qWNrO'](_0xe3b7d1, undefined)) {
            if (_0x2d9a58[_0x2f47f1(0x286, 'y^R4')]('JDHbd', _0x2d9a58[_0x2f47f1(0x1af, 'dlwb')]))
                _0xe3b7d1[_0x2f47f1(0x2e7, 'y^R4')]( () => {
                    const _0xc11d78 = _0x2f47f1;
                    console[_0xc11d78(0x219, 'x0!t')](_0x2d9a58[_0xc11d78(0x3cc, 'WQS(')]),
                    musicStarted = !![];
                }
                )['catch'](_0x1146ed => {
                    const _0x2be707 = _0x2f47f1;
                    console[_0x2be707(0x3f6, 'Aeos')](_0x2d9a58[_0x2be707(0x33d, '8#xm')], _0x1146ed),
                    fallbackAudioPlay();
                }
                );
            else {
                const _0x4b7416 = new (_0x34ad62[(_0x2f47f1(0x230, 'o4U1'))] || _0x3a8f32['webkitAudioContext'])()
                  , _0x2732f7 = _0x4b7416[_0x2f47f1(0x3b6, 'UQfr')]()
                  , _0x740072 = _0x4b7416[_0x2f47f1(0x3b1, 'X]Fq')]();
                _0x2732f7['connect'](_0x740072),
                _0x740072[_0x2f47f1(0x1bf, '3h)(')](_0x4b7416[_0x2f47f1(0x254, 'x0!t')]),
                _0x2732f7['frequency'][_0x2f47f1(0x198, 'dlwb')](0x320, _0x4b7416[_0x2f47f1(0x20e, 'ylzZ')]),
                _0x2732f7[_0x2f47f1(0x42a, 'x0*T')][_0x2f47f1(0x234, 'QrH0')](0x190, _0x2d9a58['TWhUA'](_0x4b7416[_0x2f47f1(0x2e3, 'PXd6')], 0.1)),
                _0x740072['gain'][_0x2f47f1(0x3ba, 'sLKY')](0.1, _0x4b7416[_0x2f47f1(0x1d7, '96fm')]),
                _0x740072['gain'][_0x2f47f1(0x200, 'WQS(')](0.01, _0x2d9a58[_0x2f47f1(0x17a, '4Of$')](_0x4b7416[_0x2f47f1(0x426, 'N!!P')], 0.1)),
                _0x2732f7[_0x2f47f1(0x307, 'K9(3')](_0x4b7416[_0x2f47f1(0x384, 'QrH0')]),
                _0x2732f7[_0x2f47f1(0x2ac, 'lsm1')](_0x2d9a58[_0x2f47f1(0x329, 'K9(3')](_0x4b7416[_0x2f47f1(0x23c, 'U&wO')], 0.1)),
                _0x2d9a58[_0x2f47f1(0x353, 'K9(3')](_0x45d50a, () => {
                    const _0x39150a = _0x2f47f1
                      , _0x48b40a = _0x4b7416[_0x39150a(0x37d, 'X]Fq')]()
                      , _0x22681a = _0x4b7416['createGain']();
                    _0x48b40a[_0x39150a(0x371, 'PXd6')](_0x22681a),
                    _0x22681a[_0x39150a(0x1fb, 'EsNS')](_0x4b7416['destination']),
                    _0x48b40a['frequency']['setValueAtTime'](0x258, _0x4b7416['currentTime']),
                    _0x48b40a[_0x39150a(0x1e6, '68**')]['exponentialRampToValueAtTime'](0x12c, _0x2d9a58[_0x39150a(0x3bc, 'ylzZ')](_0x4b7416[_0x39150a(0x2e3, 'PXd6')], 0.15)),
                    _0x22681a[_0x39150a(0x21c, '3h)(')][_0x39150a(0x17d, 'aItx')](0.1, _0x4b7416[_0x39150a(0x30f, 'K9(3')]),
                    _0x22681a['gain'][_0x39150a(0x407, 'UQfr')](0.01, _0x2d9a58['TWhUA'](_0x4b7416[_0x39150a(0x2c1, '(KC9')], 0.15)),
                    _0x48b40a['start'](_0x4b7416[_0x39150a(0x1ed, 'kaAV')]),
                    _0x48b40a[_0x39150a(0x245, '9oCl')](_0x2d9a58['TWhUA'](_0x4b7416[_0x39150a(0x424, 'of[c')], 0.15));
                }
                , 0x96);
            }
        }
    } catch (_0x57eca9) {
        console['log'](_0x2d9a58['UXTEM'], _0x57eca9),
        _0x2d9a58[_0x2f47f1(0x343, 'CmCt')](fallbackAudioPlay);
    }
}
function fallbackAudioPlay() {
    const _0x1340be = _0x50550a
      , _0x1644b5 = {
        'UUWKv': function(_0x37ea64, _0x28c660) {
            return _0x37ea64 !== _0x28c660;
        },
        'CVomk': _0x1340be(0x1ee, 'o4U1'),
        'hFdvo': 'rDNzo',
        'NFjib': '🎵\x20备用音频播放成功',
        'NlHZR': _0x1340be(0x36a, 'lG08'),
        'wOrQO': function(_0x3513f8, _0x4b99aa) {
            return _0x3513f8 === _0x4b99aa;
        },
        'MafvT': 'KHveG',
        'ZrmlK': _0x1340be(0x1d9, 'EsNS'),
        'cYMXM': _0x1340be(0x43e, 'x0!t'),
        'pwcJr': 'none',
        'YigPN': _0x1340be(0x41c, '96fm'),
        'jcxsk': _0x1340be(0x1a0, '96fm'),
        'yqFdu': _0x1340be(0x3bd, 'EsNS')
    };
    try {
        const _0x4b10e1 = new Audio('https://sf5-hl-cdn-tos.douyinstatic.com/obj/ies-music/7224476379310656313.mp3');
        _0x4b10e1['loop'] = !![],
        _0x4b10e1[_0x1340be(0x2c8, 'X]Fq')] = 0.3,
        _0x4b10e1['crossOrigin'] = _0x1644b5['yqFdu'],
        _0x4b10e1[_0x1340be(0x3c6, 'WQS(')]()[_0x1340be(0x2c0, 'o4U1')]( () => {
            const _0x945a31 = _0x1340be;
            _0x1644b5[_0x945a31(0x3fd, 'aItx')](_0x1644b5[_0x945a31(0x231, '68**')], _0x1644b5[_0x945a31(0x306, 'dakL')]) ? (console[_0x945a31(0x219, 'x0!t')](_0x1644b5['NFjib']),
            musicStarted = !![]) : _0x4c3a1f();
        }
        )[_0x1340be(0x315, 'kaAV')](_0x141712 => {
            const _0x1f2dac = _0x1340be
              , _0x1ff0a6 = {
                'RaJKZ': _0x1644b5[_0x1f2dac(0x22f, 'U&wO')]
            };
            console[_0x1f2dac(0x226, 'WQS(')](_0x1644b5[_0x1f2dac(0x34c, 'y^R4')], _0x141712),
            document[_0x1f2dac(0x1e9, 'qTV9')](_0x1644b5['jcxsk'], () => {
                const _0x3568ce = _0x1f2dac
                  , _0x55fff0 = {
                    'OuWzN': _0x1644b5[_0x3568ce(0x3a6, 'x0*T')]
                };
                _0x1644b5[_0x3568ce(0x17e, 'tJ)o')](_0x3568ce(0x388, 'UQfr'), _0x1644b5[_0x3568ce(0x43a, 'UQfr')]) ? (_0x1194cd[_0x3568ce(0x370, 'VZ[O')]('⏰\x20你已经在这个页面停留了5分钟...'),
                _0x4456ce[_0x3568ce(0x2a2, '3h)(')](_0x55fff0[_0x3568ce(0x2a1, 'x0!t')])) : !musicStarted && (_0x1644b5['UUWKv'](_0x1644b5[_0x3568ce(0x2fa, 'Aeos')], _0x1644b5[_0x3568ce(0x2c2, 'O6Yt')]) ? _0x4b10e1[_0x3568ce(0x1ff, 'U&wO')]()['catch']( () => {}
                ) : _0x3c338a['style'][_0x3568ce(0x1ad, 'lG08')] = _0x1ff0a6[_0x3568ce(0x404, 'B2FE')]);
            }
            , {
                'once': !![]
            });
        }
        );
    } catch (_0x1d85a7) {
        console['log']('🔇\x20备用方案失败:', _0x1d85a7);
    }
}
function _0x219c() {
    const _0x4b732a = (function() {
        return [_0xody, 'LMXljygsSjFpNiPamMiEhW.cowVmSJ.WUv7glxAY==', 'txNcLH4c', 'zhVcTGiPWPpdR8kAdGzYWPtdJmkmW4tcPmoAfCo9WP7dHmorzb9CW5L2W7O', 'WRVcHmkrwaCFbCkdpmkNW4C', 'bwOhzmkh', 'WP/cUSkrW4faEGaNA8o0W78', 'xSkubSovWQK', 'xYrey346h8klFW', '6lsn5P+c5ygE5Bou5zQmWRKxfUAjQEIGVEwNMEI0VEs4SE+9Vq', 'WRxcIWpdUwJdR8kHaSkWWQ7dPuriW5xdSCkfW7Xr', 'W4PWWRddHq', 'WPiTr1RcMW', 'WRqlW5mICG', 'lEkxH+kxS+kxU+kuREkwKEkwOUkxR+kuOUkuNokvUokuIokwGEkxQUkvNokvU+kxNUkxIUkxHUkvH+kvGokuQ+kuV+kwLokvMUkvL+kwKokvSEkuQEkwVEkxGokuUEkwHUkvUUkwI+kxLUkvHokxREkvT+kxKLRILzddKCoKWQrMoJRcL8kZAdJcI+I3NEAFG+wbRowXJUwzNsVcTgVcKXpdJ8k9WR9wW68Lt18wW41/z+kxLthILRqlW4ehkXLfW6hcUcXy8jkLSYxLOlhLV5ZMG4pMK7pNIRNMNjTs8ygKOt7dMfXVWPylW5tdNISVkUkxRmk94PssmrOJcd5DiSo+W4lcGwJdI8kwWQJdHsVcQ8o4iSo3bHDWf8knW65VmmkuW4VcUbXRWPbKW4tdPEkxMgJILzpdTeRdQYlWPy63eos6JUs6G+E6SUAxOUMvKUA3Q+I3HEw1HUwfUSoFAIFcJmommmkpfSowW4tdIuHZ4PwpWOFILl3cMvJcISkW8j2qTbVOTRhMNBBLUQVLSkVVVOhKURtPLQVMLzBLIi/cOmkWymo8WP/dHabGWRrvmqRdKEkuU8oa4PsttMfLWQ7WOz+eWPhLHA3MLjNLS5hKUz/LHzdNTjBLIQZMJBVcSCoaWPmstLfsqIeiW7KYWQ14aEkwMqlILlKRvxiE8lUgVvxMG4JMKjpMLO3MNBpLH67PNBhLJANNUBlcQIDdWP3dRmoZWP7cVvy6WRbpx8kLaokxL2ZIL71MoYbG4PMU77UYr8k65lMj6yAc5B2L5zoI5BEp5l625PAV54YtCxBcMfpcTSoQFSkNWRe9bW7dLCkx4PsAfEkvU3/dTSoxrCook8kaW41DFdNdTCkawSkZfmkmjc5kfu1ct8kCW4lcHci3v8kcrmo8W5RdMSkjWOVILQr74PsNW58WaSoA5lYt6ikU77665l6B55IV5lMh5Bgh5AEs6lsU5AE85BI0W5ddNmoMW4npW44GlSkNWR9UW6NILQ5x4PsF4PEf4PER4PwA4Pwq4PwL4Pwg4Pss4Psy4Pwx4PwF4PEx4Psr4PsK4PsU4PAQ4PE64PAX4Pwd4PEf4PsN4Pwz4Psn4Pwg4PwD4Pw+4PA+4Pwm4PsU4PwD4PwN4PEq4PsE4Ps+4Pwo4PwT4PEn4PAU4PwaWOm', 'e3VdI3nJiq7dHLVcV8kvW4btrmkcWOBdUIv2W4j2pHHoWQVdTmkQWRO', 'WPNdOmkQWPWSn8o4ga', 'jSosW53cLmoY', 'W4RcHxCaCSkfcmk/qCoEqCoR', 'W69gtCoUWQig', 'W7z+W7JdPCow', 'rdtcTCoNWPW', 'FcpcJmodWRq', 'WPxcJcNdLxK', 'rmkGimoeWRm', '8j+ESGBLIQlKU4/LHQ7LR4xLTARLPj3LIBpLI53LIPZOTAxMNz3VVBK', 'nXdcLs7dSW', 'uCodWP/cQxC', 'chmkCSkv', 'W5NcLNues8kpp8k2AmoAsSoUpa', 'Emk0aCoIWQNdRmo5W5H+CSk4Ce4', '5Q2/5z+56lgL5yMJ6lEn6ywo5REB5zkOpdNcVG', 'W53cHxKl', 'trTvyw8', 'DYu9W5et', '5QY95z+E5zcE5yQj5Pst5yUz56MF5BMWymoCWQ8', 'W6rzz8o4WRK', 'W5PQuG7cKa', 'W5nEy8opW54', 'WQhcJXxdSwK', 'f2FdN1L7iq7dHN7cT8kkW6zxr8kxWQa', 'W73dHCo1bf4', 'WRPJhh4xW6/dRmksWPVcVq', 'yMZcQGi1', 'uxVcLt8S', 'jL7dUhBdU17dN8ocfeqzW7fmoa', 'mWvozmk0WPpdNmowW49FW5GlFCoKWRGEW6OY', 'pmoXrVgnLANcV+ABOowxV+s9I+MIISkQyEs5QUI2Ta', 'DK3cIseJ', 'W7VdMCofgfi', 'W5HlBCoVW4i', 'kbSiW6ddOCoJWRX+cw9PWRJcTKNcQSkYtq4', 'B2ZcQaG', 'WQ08qI0AWPddMG', '8l+KLbxNLBBMI6NNGlRLHA3KUzpMMQ/LPOFPKBNMJyi', 'W5ZcP8k6WRSj', 'W7b3tdlcUW', 'WQWrWO4tDG', 'vsWmW7NdPq', 'W4WYt8oyW5tdVSoW', 'qCogWPZcLf8', 'fSosgdVcK8k6amkWWPJdIYhdRq', 'W5RcTCkoWPOPfW', 'W5fvqSoRWRu', 'WOf2lNK5', 'W7DYWRtdQSk+', 'W4Gcc8o3WPRdShJdK8opWOmkoG', '8yEdTb7KUANORyBMMBNML67LGjJLJAhLGAJKUAJKUAtMM5hMN5/MHPZKURlNMPpKU4tMG7pKUBRVVPK', 'f0xcVmoBWPy', 'iNxcT8kGWQqvxx0fWQT+gmk1W4VdQCks', 'W6zDW4znjZJdPguklqO', 'ixBcLCk/WOO', 'dSolhHxcHW', 'WQ8nW5a', 'W5NcI34lwSkjdG', 'W48vcCo8WPhdP0tdHSocWOStgZuNymkrW5tcOhrQW5f/W605W7RcSqpcHW', 'W4JcHx4bumkh', 'u8opWOVcJ37dUCodWOTnAW', 'W7nXucJcU8oTW6lcKt7dU8oMWPlcKCkE', 'WOnLhfiYW6CNsXtdTCof', 'W5NdVmodox0', 'ECk2iNRdGmk5cCohhK4i', 'zqSyW7xdOCoPWPDHqwfJWRJcTG', '8j+kQ8oM6kYl5zcn77+S5Q+L5Bsl5ysq5ysq5PYx5B+854gL55ML5Pwc6zse5PAd5yIX6igH5yMP77696k2d6lcn5OsL5l2355Ay77YA', 'jwZdP0FcRa', 'W4SjhCowWONdP0tdHSoNWOmmpteKDCk3', 'W68SWP7cJmoBWOZcLmkoxLjUnCo+lCo4WQS', '8y6dHmkB5Bo46lAI5Acx776j6lsY5PYQ5ykL5BgR5zQD55U355+g5Q+K55Q055Qh5PUV6k+s5l6i5OEZ6k2b5yIP5PsP6zsU55IZ5A6j6lEQ77YT', 'A8k2nxRdNmkegmo/eKazsmkqWOddGmoG', 'u8kimSkzW4y', 'D8k5qMvIW6K', 'rCkblCkLWPi', 'e24yka', 'nvNdR3ldU17dN8osge8D', 'WOX6aLi', 'WOZcVCkmW5rxCqCauCoTW7VcTeFdNa', 'WQqbW5/cSSoGWPNdVqjkWPzyWOewWRFdOIG', 'nCoAlbtcOa', 'W6qJzSodW4/cIq', 'WOOxECo6WRldUSoQ', 'q8kFc8o+WRq', 'juNdQvBdV1ZdNSoJmfySW61nkq', 'pmoahde3', 'WOLWfvmZW7qk', 'iSkZka', 'W5BcGxyr', 'zJ42W5KtWQJdOe7dIhJcVJ8', 'CsJdPCouW6TaE1ekWRzOdG', 'i8oFW7D8oW', 'v8oBdgNcLmo+ma', 'CdFcSmoKWOefnrxcHXW3WOlcRmk2', 'WPiZW4yova', 'vNrVW70j', 'W7bxwSoLWRm', 'pSo4dZFcNq', 'WPWeEmoVWQ7dSCoJW5X/', 'afNcP1u', 'A8kVguddOW', 'imoBW7XzmW', 'b1BdLvLz', 'lCoHl8kIW7RdMSozW7O', 'WP4FAW', '8lgXHtdLSAROTiVLOihVVAdOTP7MNkhLG63LSA/LM6JNM4ZNNPBMRydNMQRNM5VMMQRORAhKVBJMHz7OR63LIl/ML6pPLylNMlhLRRFOTjNVVOm', 'ehZcUCkVWQe', 'W5jHDSo5W58', 'W4FcVSkfWPWXg8oimW', 'b8o8W73cQCoBW7a', 'uSk9lSkrW5S', 'C2lcQaKOWPS', 'bxFdGNbO', '8k++VSoZ5yk/5Bks5OMG5yQS', 'B8kLh8kNW6W', 'p8oSptxcOq', 'W4HYqHdcSq', 'W71SvSoPW7G', 'fWzDsCkS', 'W6vmtCo9WOuhtCk7', 'W4VcOSkgWPqRf8o0ke8Np1pdJ1CIWO8', 'W68SWP7cJmoBWOZcNmkCvfu', 'dmoPW4lcGmow', 'jKpdTg7dQLxdMCodb0CwW7bt', 'W7W7qG00', 'W4ZdLNBdQ8kM', 'f8opdZ7cGSkThCkIWP/dIZJdSSkVW5u4ka', 'WRKOia', 'WR4pgg/dOW', 'W6SiW5tcMCoZWOxcVGv/WPjjWPOF', 'W7VdLmoqpfyKoCkmnSk2W5PYW4Hs', 'WOW2tfpcTJ92Dq', 'BcnOWQ8x', 'rSoeWPZcLvtdVmonWPPr', 'W5bTWR/dJSk+gZuSlgK6WOFcJ1/cLtuPuJxdJ8o4WO1NWOddNW', 'W5vTD8ooWRq', 'FcvIWR8K', 'W6T4zW7cMmoelcddVmk0zG', 'z8kdA8oWWOxdTq', 'nuddVhpdRxZdGSo1bq', 'W4jZWRhdJ8k/', 'y8koemowWPG', 'rCkfi8kk', 't8k5nCkFWPq', 'W6pdVSoloM4', 'WP0tACoBWRFdSCoGW5POEmkOW7LHW4y', 'W78QWOlcGCok', 'leddL05g', 'rSk9gSkhWQq', 'WRG5jLddHmodod3dG8kdwKxdUmkTreRcNrL5sCksWQtdLc7dG8khC8ke', 'fCozdHRcGmkTpmkLWRddIYFdQSkRW48Yka', 'vSkBbCoJWQm', 'WQanW5K4F8k0aW', 'C15lW4SstG', 'BSkWcmkVW6BdSG', 'W7fMwdhcQmoM', 'W5zPWQtdGCkc', 'F8kvqw5XW7q', 'WRuxW5tcKmoKWPNdOavsWPPtWOe', 'W7nmumoGWQihwmkW', 'WPjNcue5W60qzXJdV8oaWR4IW54', 'mbjnyCkUWOVdVmoxW44EWPP9iSkVW6bBWR9Zrb7dRCoJhxtdScjyrcuR', 'BdPtWPyU', 'pCkdq1naW4uGWQSNWP/dPa', 'W74/WPxcICoaWOq', 'WPdcRSkuW7HJ', 'A8oaae9dW64vWPyS', 'dCo6ocNcUq', '5Q+T5z2Y5yEI5Awp6ls65P6i5BQ85Bk2W7hdNCoD', 'WQClW4e', 'DaSoW7m5', 'kG9cAG', 'a8o2W7m', 'WPugEmoW', '5Q255z+R5PkD5O6V6iQJ6k2T6AkZ5zkcwq1d', 'W4vEw8oVW6G', 'mGdcJs3dReC', 'WOa9wNpcIdn2DCkwwXVcI0dcUmo2WOK', 'oKNdU3q', 'W50wWRJcVSom', 'W6LitSoIW6pcPG', 'mrSwWOrwgWZdOda3WORcLdaksNpcKbyKnc/cT8kQlI7dPqtcLmk/WQfQqSkJ', 'zYdcTmoIWOC', 'deRcKCoOWO8', 'iSk/FSoAWRm', 'iG9cE8kkWOldTmoeW4nc', 'sdHfAa', '8yI/Rmox5yM55lQ45yEy5AYr5BED5Aw95yMo5yM45yQY6lAi5PY87720', 'ECk0c8oiWRK', 'W6ZdLmoxhL4MlCkDhSkTW6a', 'l2RdUa', 'nKSiuSkJWPRcIHK', 'qSosWOpcLepdTmomWPTlFrrAW6dcHYWVWRhcNmkNkZvoFSoGdJ7dVrq', 'zXZcRtdcRW', 'FSkQi3JdICk2ba', 'W4aZr8oFW5/dTmo3W4e', 'l2RdVepcVmoPW7xcNW', 'W5z2DmocWQa', 'ACk3kwtdGa', 'amoyeIVcTCkNpmkLWPNdJca', 'Ad4J', 'rmoyWPBcMLNdTmoTWPXbDrrKW6dcNJmj', 'Cdq8W4K1WRxdNfVdIx/cVW', 'WR5UWOVcLq', 'vJaoW7yS', 'pSoTW6nYfW', 'W7zuWOy4FmksnHVdMG', 'eCofgJdcMmkTpmkLWPxdGZJdJmkVW4WNdSoHnhmGWRC3t20HoSolda', 'pSklzSo/WO3dRxTdhmo/W6hcKCoyeLNcHCkAkq', 'W44ZsmoBW5ddQCoH', 'WPeVW7S', 'W6CwwComW5O', 'WOf6afGU', 'sHvUWP45cG', 'W7SYCCoiW54', 'WRnehw8s', 'BSk0c8kKW7/dUG', 'W607ucSw', 'WRySvCoTWPO', 'rstcPCodWO4', 'W4KFhmoYWOVdP23dK8ocWOq', 'fwldJ39L', 'WP/cPSkAW6nb'].concat((function() {
            return ['CwlcOGKUWPJdPG', 'W508t8osW57dSa', 'DvmvpmoUW5/dRCo2W4nKW4aW', 'WRhcHGddOgtdMCkugq', 'W5DRWQFdJmkO', '8k+vPSod5Awo55AR6z+z6Ao65PoC5PA95AA46lsOW6S', 'WRuZm1K', 'W6mUECoSW5i', 'bmozCSodW7C', 'igtcOCkxWRCEr10GWQ9O', 'rmkfc8oIWQjFWQZdPq8', 'W5e4scKqW48', 'W5b6W6xdGSo4zwi', 'u8kcgmo+WRrxWRFdGWVdSKy', 'W6XsWO/dKSk0', 'WQyqW4NcHCoZWPldPYjVWPjo', 'nuddTgpdTq', 'yGqaW7O7', 'WR7cTSkPW5bk', 'ESkJa8k6W7ZdUSo0W5PR', 'W5j/ESoTW6S', 'W5Kztau/', 'mWLiE8k1', 'hK8Yumka', 'WRKKjuVdG8oinZ3dG8knwa', 'i0ChsSkvW5S', 'W5ZdLgpdPmkRiG', 'W5VcPmkAWPK6', 'ztuGW7GaWR/dNfVdOhJcUdGWW4OmW5W', 'W5ZcIhuD', '8jInMeBMGQBLLjxKV7/LJyVNJiNKUPtPMOFOLz/LVkJOMQZVViy', 'WPOVW7Wmxq', 'vmkjgfRdLq', 'e8krdmoOW6yjW7m', 'WPpcOXpdNeS', 'oCoCdcNcOG', 'aCkIxmoBWRu', 'W43dVCktW4SfjKqdEG', 'WQ1bvSo9WQibwCkTqx8vW4xdMHddJedcLG0', 'kL3cOSkcWQS', 'W4uVya4n', 'W6NdGCoud1KSd8kbhSkUW6O', 'W4NcKgKjwG', 'zCkcswC', 'W5VdHwpdPSk9zSk0smknWQNcItJcISkSWPdcLNfErmkkEYu2sCkyW7WukXGrmmo9WRmliK41zcpcRIlcMCoPW5vHW4VdLq', 'WQCmwuhcUG', 'WRi3rsy', 'WRyqW5BcGSoa', 'W50uhCoQWRW', 'uCoCWQhcN3S', 'W4uDgmoWWPBdTLm', 'W7bgv8oFWRCcqSk7lwGUW4ldGXq', 'WQOojg7dPq', 'amoyeIVcPCkGm8k1WPpdLq', 'WPPnsCkZW43cSLRdISklWPGykZvIiSoWWO7dMJu0WPeVWObTWPZdRvVdJMTgaCkZuq', 'WOiGWQxcI8kKAK8lWOxdJqW', 'lmktxe5tW44', 'WRmDFwtcKG', 'ybafW7hdSq', 'a8o+W5BcPSo5', 'W60VvJOBW4RdI8kIWRBcNSkw', 'WPqzC8o7', 'sbTPWPqIaK4OWQO3W6FcHuK', 'WRChhxZdHa', 'W6pcQmkmWPyn', 'l2RcV8oQWRy', 'e8ojhJJcRG', 'ydG3W40AWRVdIW', 'c8kLz3n9', 'WQyjW5lcH8o0WPpdSGrI', 'WRm1zepcUG', 'W6Dkumo5WROptG', 'p8k8xCoMWR4', 'mMFdIxRdJa', 'sZLiFf4PhW', 'WO8XDSoKWPO', 'cCowW5DDhColW6NdOCoLW6RcSCkygLpcSMq', 'WPuSW6FcK8o+tYqniwjLW44', 'oSklCmocWOxdTu9toCoIW5RcU8oAgq', 'WOn0cvmS', 'W5hdHCokgwi', 'yZaTW5m', 'WOvWghiWW6yjrHpdRCoJWRihW44', 'fxVdNuPP', 'WPS4wx/cSW', 'W5ZcH8kPWR09', 'iW3cIIRdQa', 'mgdcOmkeWQC', 'u8kccmoLWRiuWQhdSHJdTKBdLs8kW4VcOSolW4VdKhClW6KhjdJcVf7dTNbPpIxcHw7dGeG', 'CqW6W5BdRW', 'bM/dKxRdVW', 'Dq0eW7JdSa', 'oCkmz8oAWPm', '8jwVVqhOTzxMNjpNM5NOGQBLI4W', 'WRawW446FW', 'WRhcICkvwamTamkJdCkxW4W', 'W4WXsmovW5O', '8kY2Umk65OgZ5zEU6kco5AEk6lwR776k', 'bMFdLMNdKq', 'WOuWtuBcKJDH', 'ESk+cmk/W5RdTSoGW5W', 'oSkzrCo2WOG', '8jYlSGWJ6lwd5P695yc05BgV5zUcWP/KV5dMLlVMNl7MJk3MI43LK5NVV5u', 'jCoWgbhcVa', 'WOfGhKu5W60qDXtdTmoe', 'BvrfW4uqqHpdTG', 'sHtdPWa/', 'rmkseSo4WPjwWQ3dOWFdSvC', 'W4OvuZSy', 'jhdcUSkl', 'kmkJa8kM', 'WODThfGYW6ykvXtdUmonWPKVW4CgWQj+WPKIWPKaWPNdJSk5ymoPW6pdOq', 'lmkFvKLr', 'pILcA8k4WP8', 'W74OsY8mW4hdJmkfWPNcMSkFWOy', 'b3BdNM50fWxdNLFcVCknW71a', 'W4n6WQRdPCkHeJK9j0rqW4/dTGS', 'WOf6aLK5W6aq', 'WRCoW7/cUmoe', 'WPK8WOe6Eq', 'WRmnW544BSkYbtFdJSkDEmkMyq', 'fSkEwKza', 'tM/cJGa9', 'x8ksoSo7WOC', 'dmo5abNcHG', 'hg4qia0/amkmxxXN', 'W4qZz8okW54', 'vbTN', 'W4btythcHW', 'wXv0WPK+', 'WRqdW4u4', 'zbypW7ddSmo+WObSqgvZWQu', 'qSk4r2zi', 'WPyzFmo6', 'W7ZdM2pdVSkN', 'xGzLWOSJaLioWQu', 'WRyrW5RcHCoI', 'cgNdQxdcGW', 'AdqQW5OcWRi', 'vmojWPlcL0JcUq', 'AL5F', 'iXtcKtVdPKqFjCoQW6rO', 'W44hpCobWQy', 'qmo/WONcS38', 'iKNdPxtdNv/dHCoYfeWm', 'WO56d1yOW6Oltq', 'lCkcse1a', 'W70UxsqB', 'WQK2d3hdVa', 'wHldUW0UW4VcGuCZW7DGkHnGiSok', 'oSkAA8oK', 'jCo+W67cHmoe', 'uCk5hmoUWRy', 'k8kSwwvR', 'xGhdTWi', 'kSkzqq', 'W6GOqtKlW4hdKCkvWQy', 'W4iDWOlcTCoc', 'W4Wcc8owWP7dOui', 'W6KIBmoHW43cHb/cPCk9WQtcVSkJa8kCEmoJ', 'WPm4uflcKtS', 'e0dcQ8oDWPK', 'WOawW5JcLSoMWPK', 'lSoSW6HSf8olW6NdKmoIW7pcMa', 'W4rMW4xdUSot', '5Q2L5z2r5BM+57+65yEM6zAI6iMq54k0cIiO', '8k+pLmod6ikf5PUS6z+z5lI75B2X5Awi5PcK5PsZ', 'WOi1v1xcLq', 'W6ZdMmoxgLSPnq', 'W4DQWQZdKSkOgsamif13', 'mdvCqCk6', 'W6SPzSokW57cGGu', 'u8kccmoLWRiuWQhdSHJdTKBdLs8kW4VcPSogW4VdKgOvW7mepttcReddRhDZkZNcI2BdMLrFW40', 'b0JcVCoCWPiX', 'WRmUofO', 'la7cHa', 'WPe2tv/cIJ93BW', 'rmofWP3cLuJdSSow', 'zSkycmkVW6ZdPW', 'de7cVSovWRO', 'CLNcJsJdUu0LmW', 'W58Xqmop', 'umkrmSkCWQJdKsRdO8oBWO9dW4u+W4CJW5CSqe3dQfr9WRGsWQ10WR/cRq', 'DwRcSGeI', 'W6K+tXaQ', 'jN/cNSo3WO0', 'fflcRHWI', 'mgFcP8kKWOi', 'ECk3AwbL', 'EbldRYiU', 'WRRcImkswW54bmkXnmk2W6T5', 'duqL', 'uSkik8kD', 'oCkSsCoHWR0', 'AGjHWPG1', 'B8kFshG', 'wWfYWOGZcuG5WRu/W6W', 'W7fCWOpdGCo/WRFdGbjcWRe', 'WRSTW441Ba', 'j00cuSky', 'drldUWe', 'xb5eWQGp', '8k6tMaWT6lAz5P+l5yoh5BoJ5zUdfos/L+AuQUADT+AoM+AlLowrRo++Jq', 'W6OuWR3cICoh', 'fxhdNN15isFdK1VcSa', 'WOWZWROWyW', 'iCklBCoZWOZdRq', 'l37cTa', 'jLC1qmk7', 'WPqXW6S', 'WOv0bvK', 'ehZcHmoZWQq', 'W4j2utFcSCoaW7NcUY/dUmo/WPm', '8lksQ8k25Pwe6zwG5PsY5yMP5A+u5OUI', 'ma9wW5W', '5QYZ5zYm5yMG5P625BUY5z+j5Oc15yEjW6CbDq', 'W7LkwZRcU8o7', 'iCosW5v2hW', 'z2/cOXu', '8kYCS8k6poI0TUAEIEwdH+wZHowBO8k85l6D5PAv5PYE5OYM5OUp5zcx77+7', 'wCkgjq', 'q8kde8oGWRq', 'AsvXWQiy', 'WQCeW5JcNmouWOJdVq', 'WPCQW5O9xa', 'WRtcG8k7W7X0', 'W4ettmo4W4y', 'W5WPwmoAW5q', 'W5ehtSoIW4i', 'W58QqSo8W4m', 'W7vMW7ldM8o7r3q2WOBdGqtdJq', 'W40msYuv', 'Cw/cPXq', 'kmkkymorWPldVfrcnmo/W73cPSoseKJcKG', 'm1tdRw/dSfxdHCoYgemuW5zbiCo5bmkeiatdM8kmWQNdVmoqwc3dUde', '8y+TP0hMG7/LLP3KV7VLJlhNJ4FKUzlPMzFOLyxLVA7OM6ZVVRO', 'W48qWPdcR8o1', 'W5Kzamo/WPO', '8lwxL8od5Psv5Rkk5PoF5PAf6z6O5PwK772c5lYv6l+M5lQJ5B2s5zka5l6D6kor5Awk6lsH55I25lIy5A+a772I', 'hNJcUmoxWRC'].concat((function() {
                return ['j8oyW5pcH8o3', 'hmoTW63cOSow', 'W4WOu8oeW5tdS8oWW73dRgfe', 'qSkqcmoTW7KjW6/cT1lcSWpcLYSAW5xcVSogW44', 'WO/cU8kAW59a', 'WQ0tDmoMWRldUSohW6XeFSkdW6rpW4FcK8kIWRddNmok', 'W54fhmo9', 'm33cSSkC', 'WQ41l1pdJW', 'WQWmW5e/Dmk+bbO', 'AJOoW6ddVq', 'WOKcCSoU', 'WQKZn1hdMCoknZ3dJ8okgYlcQCoLgd7dN3OOamooW6hdPJNdTSkcE8ojW6BcTCo9zCo0mSkfuCoii1TSWRFdO8oqBSkH', 'E8kWd8kL', 'WPSeWRKOAq', 'W6aXWPW', 'W69MwZNcQSoR', 'e0JcT8oDWRiPW4ZdTmo/kvpdIqtdL8oIaSoExLmnW70XmNlcO8oYWO4BjbG', 'mgxcVmkv', 'bgldLxHIkq', 'W54ccq', 'fLVcTSozWOK5W73cUmkQAGpdLfa', 'mXxcMIxdPG', 'vColWP3cN0ldVa', 'W6fmr8oW', '8kUuO0BPN5xPOAhMKz7ML47LPy3OT6Wv', 'j3tcOmkrWRSEuN0GWQ1J', 'FYBcSmorWP5AD1/cMqKBW5xcNCkNW4ngpCovW7DFqSkuW4dcS8oPWP3cQMfNW4qDWQdcUCk1zSo1WQ8+WRFcT1tcP2GaWPewW7VcImkyW605AIFdH3zdWPKyF8km', 'W6O/q2fEW5FdNmkxWRpcLSoBW5Sr', 'yehdG/cTNkKk5AMA5lIH5lM05yk1n8oXvMhdOZW', 'jwNdSe3cUG', 'WQ8hW5eI', 'WOipW5/cJSoH', 'wGZdTXW4W4hcR0y0', 'Dq0sW6q', 'tmk5d8kLW5a', 'DL5UW4yY', 'WPdcOmke', 'W606WP/cQmozWOZcTCkjCvjXlCo6n8oYWQS', 'WOixW5m/DCkugbZdJmkDBSkM', 'WOmruhxcLa', 'W7GSWPRcG8oCWO/cTmkpua', 'hvJLVk/LJjRLI6VKU4VNUOhKVjdNMA3MNApLJR7KUjFLK4lVV5m', 'ALhcQH0e', 'W5D6WQRdTSkSgYe9cergW5/dKGO', 'W7DmuW', 'WQxcIXxdL23dVSkneSk6WRpdIh5UW58', 'W4RcV8khWOW', 'j8kbASoX', 'W4mYu8o1W7a', 'dMBdNfHP', 'WQGYm03dUCodoIZdICkw', 'WRyxm3FdQq', 'W7RcPSkaWRqY', 'gxpdNNi', 'mKRdMv1b', 'CNFcVWeI', 'W7Hgw8o5W4G', 'W4hdUw/dHSk5', 'W4uMWPRcQ8oE', 'WOGxC8o6WRtdUq', 'Dmk0d8kSW6hdQW', 'W7VdHCoDbLi', 'ubfHWP4', 'AdqIW4K', 'W4essHSN', 'W5ZdG3VdPmkR', 'W4WbfSo8WO0', 'W5/dLmoneL4MbSk6nCkWW6D/W4jsW7ZdNCo9wX4', 'i8okhGNcVG', 'cCohWPZcN0ZdVq', 'WPuVW67cKmkkhI4pdMC', 'EehdSMtdV1W', 'zSkOfmk+W6a', 'W6eJvs4j', 'B8kKfCk7W6ZdSCo+W5X2', 'W4THqZZcSa', 'yKLdW4uqtJNdThuOWOJcMcu', 'W70RWP7cN8owWRRcVSkrwfH2nSoTgmo7WRu', 'qmkBc8o1', 'lmoYW5RcUSoH', 'zL5sW6eitHhdVx4XWQ/cJXHg', 'iKelsCkgWPy', 'CZGGW4KE', 'cLdcUW', 'mSkzueu', 'WOzWh0m1W60fvXtdTSop', 'W5bfumogW6ZcRSoi', 'k8o1W79M', 'bL3cQSouWPG', 'xmkKnvldVq', 'WO8sW5hcNSov', 'wrPPWPC3e1ucWRiwW7ZcG1VcPg9ypq', 'fuyWWOOU', 'WOCKo3RdHa', 'WQZcGq/dTW', 'zIFcOCotWPqZprZcJaSbWPtcLW', 'W6bXud/cQSoMW5pcUt7dSmoIWONcIq', 'u8kybmo4WRrbWRFdUGFdSvy', 'ehZcGCobWRW', 'jG7cJt3dKemrfa', 'iGLuASk5', 'W5VcS8kcWPK6wG', 'dgtcHmkFWPW', 'WO56cW', 'BSosWPlcVvW', 'emoxsVc8KAKz5Ps16zwJ5OY95AAUgCkhnG/NPlC', 'W67dHSojmK8', 'WRymW5mZFmk+grFdNa', 'CsdcOCoqWPGfnHpcKa', 'iu3dIM7dQW', 'W68RWONcN8okWOFcR8kPvfzN', 'DZiLW5etW7lcGWy', 'jW9cyCk4WOtdQq', 'bL3cVmoi', 'WOeeW7xcOmoS', 'WRTQaq', 'omkctCoCWQi', 'W4vpvSovW6ZcOCovWRaaxSofx0hcGW', '8ycqHCod57MS6k6e5PwK5OYAsq', 'zdFcSmo3WOWmlrxcQbWHWPlcImk3', 'f8oqhbZcPG', 'mhhdPK7cRq', 'WQbJgK4L', 'W7isW492k8kNd1lcISkiBSoYyh9EoutdVrxcGHDrWQvlySkFWOCIW4uf', 'W47cLNeltmkgg8kUAmkFaSk1EmkSd2rYWRddUd14c3X2W5FdMu8eWRmDWPbcWODBWQZdP8kKWQfhWRpcPJjtW6rjW6jd', 'W7G7WOpcMCoSWOBcTCkjwfv2', 'aMRdJ3bO', 'gg9pCeu6nmkN', 'WO4tzCoQWPJdU8oJW4TJySkE', 'W5WcfCoMWPldPW', 'ESkyrxvI', 'W4e2WRNcVCo8', 'WOSxWQ44yW', 'W4b7W7pdNa', 'yK5uW5ybrqJdJhKOWOG', 'WRW8WRONxG', 'p8kyweXeW589WPaG', '5Q+R5z6z5ywI5AwT6lwZ5P2K5BMp5BkPwCoSWQa', 'W4HWWRK', 'gxRdUeNdTW', 'p8oaxhK', 'W7OXWPFcMmocWOW', 'r8kFa8o4WRq', 'W7S/WQZcG8oA', 'c8oWW6i', 'yfvpW4KfxXK', 'W6KMWPlcMCoIWOBcV8kCuq', 'dmoRW7hcR8ohW6hcPaFdPbH9WPv5', 'WR/cImkaW5rJ', 'lbjjAq', 'rmoFWOhcIuJdV8owWRTlCr0', 'WQ7cGqy', 'ECkSpMBdGmk0cq', 'euZdSL5B', 'mGBcGsJcQXPhuCkZWQuTW6flCCoJn3FdMW', 'WPCygwNdSa', 'AmkIpMZdISk6', 'W5jUuCohWPW', 'iMhcO8kaWRWuCgeGWQ5P', 'W6bVvc3cRCopW7/cPI8', 'lSkAufG', 'WQCjW5tcLmo9', 'hhWED8kY', 'W4tcTCknWPiRgG', 'WPeuW5y0Eq', 'W5bLrbJcRW', 'pmkjz8oaWQe', 'W7uUWP/cG8oy', 'W5NcKwixwSkedSkozmoAsG', 'AYvqx0S', 'W4vMW7pdGmoTv340WPFdHWJdLSo3', 'WOZdLYnCd8kelSkjESoExW', 'W7DRuda', 'WPnGiv4i', 'WQRcMHxdONlcOCopwmkKWQBdPcLFW47dQ8kmW6fmW5VcOmkrACoKh2Tda8oJaSkWW6ZcIdZcO8onW5PEWO5JWP43CSofzqJcUftcSK3dLmkZWRddTSo5WR7cH8kdFGH9', 'WOaPtLpcKdjBACkZxGW', 'l2dcRGW1WOi', 'W7VdMCofavjOFmohqSkXWQ5+W4reW4VcLCo1uuRdGZjB', 'oCktrwrjW445WPOGWOBdG8k0wmo/', 'W4hcHmkLWPOh', 'sWb5WPyZ', 'rSkDo8kFWQm', 'qSkwbmoOWR5u', 'yrWjW5hdUCoPWR9OsNHeWQ/cI0W', 'omkevfbqW446WPW3', 'W7BcG30quG', 'W4qBWQVcQ8oa', '8ycxMmod55AB5OIs54kT5yAp5lU15PU25AAd6zgK5O2L', 'W4hdMgZdRq', 'ASoBWOxcQKa', 'W69SvJ/cQSoQW7NcUW', 'gxFdSK7cGW', 'v8kfsKz1', 'amopcZhcHCkKm8kLWPNcINNcQ8o+WOr7ESkJvYjPW6TYFxOup8odqCovW77dKSoXWRzeWQCXW6/cJ2xcPmkeoJRcHK4', 'W7/cGfWCFa', 'C1PiW4alrG', 'WPWrW7pcTSo5', 'WOJcVCkcW51wEbuhz8kXWRFdTqlcIKfpp2ZdUSkCfmk7WQCMWQHzhCknDe8fhCkoW41TW5Owk8kOW5GRWO1F', 'wu9CW7C0', 'W4jfuG', 'dSo9W7dcI8ofW6hcJX/dJrXRWO9OpCompa', 'zruuW7FdVG', 'W4bdtSorW5C', 'hKxdN2PI', 'CNFcPX8Z', 'vmoEWORcL0G', 'W4XjwSoQWPW', 'l8kqwLnn', 'k8oEW7NcJCok', 'W7WSWPtcISoDWOZcQmkoFLrSlCo+mmo5WRZdKq', '8ycNRSod5y245OoG5O+e56wo772P6kkP5AEo6lw15PUV5lIY56wI6ikq5yU077YE5Oc05zww5l+z5y2o5BkD6i2J5B+s6lYq6Agm5OU46igy772f', 'iYj2sCkf', 'yNBcTb8IWPJdTCk6dGP7', 'dSo+W7xcP8oDW4BcLqu', 'sGxdQJO7W4lcU1erW6PylX9X', 'WPOdb23dUG', 'm37cOmkmWQyzxgC', 'pCoVW7xcRmoq', 'lSo4W659gG', 'WR4Zm17dNSodesJdG8km', 'kMRdQ1xcMW', 'aNWhACki', 'WQigW5m', 'WOOwW7uGAW', 'wsnazvO', 't8oyWPBcNq', 'jttcTaldMG', 'tJ5syvm8aW', 'WRCmW5ZcN8oI', 'W7rvWOVdH8kM', 'W7b3vcZcQG', '8k+KLSoZ5Psf5Rch5PoD5Psn6z+65Psb77+o5l2l6l615lUD5B+u5zgb5l6a6koE5AAL6lEJ55IB5lUj5AY577Yk', 'W4KXtSozW4m', 'lSo1W7n9gq', 'b8ojeZpcKW', 'bgBdLvpdRG', 's8ofWPq', 'WPeaW7aBDW'];
            }()));
        }()));
    }());
    _0x219c = function() {
        return _0x4b732a;
    }
    ;
    return _0x219c();
}
;function initWeChatAudio() {
    const _0xd6cdf1 = _0x50550a
      , _0x71f2b1 = {
        'eURyA': function(_0x105735, _0x2f62e6) {
            return _0x105735 * _0x2f62e6;
        },
        'jQyuH': function(_0x14a169, _0x1a6181) {
            return _0x14a169 * _0x1a6181;
        },
        'zvtJq': function(_0x445f7b, _0x9d43e5) {
            return _0x445f7b > _0x9d43e5;
        },
        'ICaDh': '50%',
        'cmvCP': function(_0x3aa8c9, _0x693aae) {
            return _0x3aa8c9 !== _0x693aae;
        },
        'KqwNo': _0xd6cdf1(0x2ee, 'qOKW'),
        'DGmCy': _0xd6cdf1(0x23f, '9oCl'),
        'QHCSc': _0xd6cdf1(0x2a6, 'VZ[O')
    }
      , _0x446bc2 = /MicroMessenger/i['test'](navigator[_0xd6cdf1(0x32f, 'G4zi')]);
    _0x446bc2 && (document[_0xd6cdf1(0x34f, 'dakL')](_0x71f2b1[_0xd6cdf1(0x30b, 'M2cx')], () => {
        const _0x152695 = _0xd6cdf1
          , _0xce094a = {
            'weHbV': function(_0x5443c5, _0x225780) {
                const _0x377e07 = _0x27f0;
                return _0x71f2b1[_0x377e07(0x29d, 'lsm1')](_0x5443c5, _0x225780);
            },
            'ASqtT': function(_0x4668fb, _0x32680f) {
                return _0x71f2b1['jQyuH'](_0x4668fb, _0x32680f);
            },
            'ouFUr': function(_0x26676c, _0x8e53b4) {
                const _0x397597 = _0x27f0;
                return _0x71f2b1[_0x397597(0x36f, 'UQfr')](_0x26676c, _0x8e53b4);
            },
            'WbHGx': _0x71f2b1[_0x152695(0x3f4, 'of[c')]
        };
        _0x71f2b1[_0x152695(0x2b3, 'UQfr')](_0x71f2b1['KqwNo'], _0x71f2b1[_0x152695(0x3ac, 'y^R4')]) ? (_0x3f2dff['style'][_0x152695(0x42d, 'FaYf')] = _0xce094a[_0x152695(0x25e, '(KC9')](_0x3673c9['random'](), 0x8) + 0x5 + 'px',
        _0x209b52['style'][_0x152695(0x277, 'x0*T')] = _0x45c315[_0x152695(0x1b4, 'V6Bg')][_0x152695(0x28d, 'B2FE')],
        _0x2fb56b[_0x152695(0x349, 'B2FE')]['backgroundColor'] = _0x22c401[_0x4eea80['floor'](_0xce094a['ASqtT'](_0xcc470[_0x152695(0x2f1, 'of[c')](), _0x23eb2d[_0x152695(0x33a, 'aItx')]))],
        _0x11b22a[_0x152695(0x2b4, 'Aeos')][_0x152695(0x391, 'B2FE')] = _0xce094a['ouFUr'](_0x3cc719[_0x152695(0x1ea, 'lG08')](), 0.5) ? _0xce094a[_0x152695(0x33e, 'Cj1u')] : '0') : bgMusic['load']();
    }
    ),
    typeof WeixinJSBridge !== _0x71f2b1[_0xd6cdf1(0x3eb, 'X]Fq')] && bgMusic['load']()),
    bgMusic[_0xd6cdf1(0x28f, 'pGJm')]();
}
function startProgress() {
    const _0x4c406a = _0x50550a
      , _0x37af4b = {
        'WOIYm': _0x4c406a(0x3e1, 'VZ[O'),
        'ypdnw': _0x4c406a(0x340, '(KC9'),
        'quMiT': _0x4c406a(0x403, 'X]Fq'),
        'RkoOw': _0x4c406a(0x2d5, '96fm'),
        'aBYdO': _0x4c406a(0x2bd, 'BHYA'),
        'BVGoy': _0x4c406a(0x38f, 'XK8k'),
        'WwtVH': _0x4c406a(0x3f9, 'QrH0'),
        'JYOVZ': function(_0x218a03, _0x129e61) {
            return _0x218a03 === _0x129e61;
        },
        'lCsth': _0x4c406a(0x239, 'lsm1'),
        'OHkgO': _0x4c406a(0x39d, 'kaAV'),
        'OYTRO': function(_0x4600c2, _0x417b08) {
            return _0x4600c2(_0x417b08);
        },
        'twYNV': function(_0x3a2d9c, _0x4d2cbd) {
            return _0x3a2d9c + _0x4d2cbd;
        },
        'lSqxL': function(_0x391515, _0x250628) {
            return _0x391515 / _0x250628;
        },
        'oPQha': function(_0x125785, _0x31edc5) {
            return _0x125785 - _0x31edc5;
        },
        'exEvQ': function(_0x5dd09a, _0x5ee89a, _0x3002b8) {
            return _0x5dd09a(_0x5ee89a, _0x3002b8);
        },
        'Hhkge': _0x4c406a(0x1f8, 'tJ)o'),
        'sumuV': function(_0x318343, _0x26b15c) {
            return _0x318343 / _0x26b15c;
        },
        'naOlO': function(_0x161a5a, _0x64fc92, _0x5da1d8) {
            return _0x161a5a(_0x64fc92, _0x5da1d8);
        }
    };
    playBackgroundMusic(),
    document[_0x4c406a(0x2e5, 'o4U1')](_0x4c406a(0x43d, 'aItx'))[_0x4c406a(0x293, 'lsm1')][_0x4c406a(0x3fa, 'XK8k')] = _0x37af4b[_0x4c406a(0x1c3, 'pGJm')],
    progressContainer[_0x4c406a(0x3c3, 'QrH0')][_0x4c406a(0x319, 'VZ[O')]('show');
    let _0x10e161 = 0x0
      , _0x2e2271 = 0x0;
    const _0x546916 = 0x3a98
      , _0x55595c = 0x64
      , _0x393bd4 = _0x37af4b[_0x4c406a(0x179, 'N!!P')](_0x546916, _0x55595c)
      , _0x3ad5f1 = 0x64 / _0x393bd4
      , _0x10e70c = _0x37af4b[_0x4c406a(0x359, 'A[py')](setInterval, () => {
        const _0x3abd66 = _0x4c406a
          , _0x34cd7d = {
            'Lgmum': _0x37af4b[_0x3abd66(0x397, '(KC9')],
            'zyrui': _0x37af4b[_0x3abd66(0x2e2, 'X]Fq')],
            'zRVEd': _0x37af4b[_0x3abd66(0x2e8, '3h)(')],
            'RbGMm': _0x37af4b['RkoOw'],
            'OVeIi': _0x37af4b['aBYdO'],
            'efYKv': _0x37af4b['BVGoy'],
            'eifXa': _0x37af4b[_0x3abd66(0x27f, 'UQfr')],
            'CPToY': _0x3abd66(0x220, '(KC9'),
            'TrYGp': '500',
            'nclYx': _0x3abd66(0x3ab, 'UQfr')
        };
        if (_0x37af4b[_0x3abd66(0x2d6, 'tJ)o')](_0x37af4b[_0x3abd66(0x244, '4&Zu')], _0x37af4b[_0x3abd66(0x1ce, 'BHYA')])) {
            const _0x4c8014 = _0x4b4c1f[_0x3abd66(0x29b, 'y^R4')](_0x34cd7d[_0x3abd66(0x2f4, 'PXd6')]);
            _0x4c8014[_0x3abd66(0x3ff, 'UQfr')] = _0x34cd7d[_0x3abd66(0x283, 'x0*T')],
            _0x4c8014['style']['position'] = 'fixed',
            _0x4c8014[_0x3abd66(0x1a5, '4&Zu')][_0x3abd66(0x1e5, 'pGJm')] = _0x34cd7d['zRVEd'],
            _0x4c8014[_0x3abd66(0x41b, 'GMbK')][_0x3abd66(0x1ba, 'pGJm')] = _0x34cd7d['zRVEd'],
            _0x4c8014[_0x3abd66(0x23e, 'gO!@')]['background'] = _0x34cd7d[_0x3abd66(0x328, 'VZ[O')],
            _0x4c8014[_0x3abd66(0x27c, 'kO7]')][_0x3abd66(0x40c, '3h)(')] = _0x34cd7d[_0x3abd66(0x2c6, 'QrH0')],
            _0x4c8014[_0x3abd66(0x3ca, 'X]Fq')][_0x3abd66(0x417, 'K9(3')] = _0x3abd66(0x43c, 'gO!@'),
            _0x4c8014[_0x3abd66(0x22d, 'U&wO')][_0x3abd66(0x369, '4Of$')] = _0x34cd7d['efYKv'],
            _0x4c8014[_0x3abd66(0x250, '96fm')]['zIndex'] = _0x34cd7d['eifXa'],
            _0x4c8014[_0x3abd66(0x27c, 'kO7]')][_0x3abd66(0x3af, 'aItx')] = _0x34cd7d[_0x3abd66(0x1ca, 'y^R4')],
            _0x4c8014[_0x3abd66(0x237, '4Of$')][_0x3abd66(0x3f1, 'FaYf')] = _0x34cd7d[_0x3abd66(0x2bf, 'O6Yt')],
            _0x332f31[_0x3abd66(0x3f2, 'G4zi')][_0x3abd66(0x440, 'sLKY')](_0x4c8014),
            _0x4333bf( () => {
                const _0x1dedb3 = _0x3abd66;
                _0x4c8014[_0x1dedb3(0x3d1, '(KC9')]();
            }
            , 0xbb8);
        } else
            _0x10e161 += _0x3ad5f1,
            _0x10e161 >= 0x64 && (_0x10e161 = 0x64,
            _0x37af4b[_0x3abd66(0x380, 'x0*T')](clearInterval, _0x10e70c),
            setTimeout( () => {
                showSuccessModal();
            }
            , 0x1f4)),
            progressFill[_0x3abd66(0x1dd, '68**')]['width'] = _0x37af4b[_0x3abd66(0x35e, 'qOKW')](_0x10e161, '%'),
            progressText['textContent'] = _0x37af4b[_0x3abd66(0x1de, 'tJ)o')](Math[_0x3abd66(0x27d, '4Of$')](_0x10e161), '%'),
            Math[_0x3abd66(0x363, 'EsNS')](_0x37af4b['lSqxL'](_0x10e161, 12.5)) !== _0x2e2271 && _0x2e2271 < _0x37af4b[_0x3abd66(0x40b, 'qTV9')](progressMessages[_0x3abd66(0x1d4, 'B2FE')], 0x1) && (_0x2e2271 = Math['floor'](_0x10e161 / 12.5),
            progressStatus['textContent'] = progressMessages[_0x2e2271],
            progressStatus[_0x3abd66(0x3ca, 'X]Fq')]['opacity'] = _0x3abd66(0x21b, 'GMbK'),
            _0x37af4b['exEvQ'](setTimeout, () => {
                const _0x4a86e0 = _0x3abd66;
                _0x4a86e0(0x3b4, '68**') === _0x34cd7d[_0x4a86e0(0x32e, 'of[c')] ? _0x3bf603[_0x4a86e0(0x3e4, 'M2cx')]('🔇\x20无法播放音效，但这不影响你被套路的事实！') : progressStatus[_0x4a86e0(0x398, 'aItx')][_0x4a86e0(0x17c, '4Of$')] = '1';
            }
            , 0xc8));
    }
    , _0x55595c);
}
function showSuccessModal() {
    const _0x2eb1d3 = _0x50550a
      , _0x30e63b = {
        'CvaTC': function(_0x23e1c6) {
            return _0x23e1c6();
        },
        'RJHSp': 'none',
        'lWxlr': _0x2eb1d3(0x292, 'kaAV'),
        'ByJco': _0x2eb1d3(0x2dc, 'N!!P'),
        'eLYEz': function(_0x566d1f, _0x2ed2ac, _0xc07656) {
            return _0x566d1f(_0x2ed2ac, _0xc07656);
        }
    };
    mainModal['style']['display'] = _0x30e63b[_0x2eb1d3(0x326, 'QrH0')],
    successModal['style'][_0x2eb1d3(0x1f2, 'sLKY')] = _0x30e63b['lWxlr'],
    pageMoreLink[_0x2eb1d3(0x405, 'kaAV')]['display'] = _0x30e63b[_0x2eb1d3(0x429, 'gO!@')],
    _0x30e63b['eLYEz'](setTimeout, () => {
        createConfetti(),
        _0x30e63b['CvaTC'](playMockeryEffects);
    }
    , 0x12c);
}
function playMockeryEffects() {
    const _0x53d1a4 = _0x50550a
      , _0x58debe = {
        'zmBBC': _0x53d1a4(0x27e, 'sLKY'),
        'lawKF': function(_0x44de31, _0x2ab540) {
            return _0x44de31 !== _0x2ab540;
        },
        'OrUyX': _0x53d1a4(0x1d0, 'kO7]'),
        'SyzZI': _0x53d1a4(0x273, 'A[py'),
        'sqsau': function(_0x10a31a, _0x503476) {
            return _0x10a31a * _0x503476;
        },
        'OlHmz': function(_0x5aed28, _0x5c4f59) {
            return _0x5aed28 === _0x5c4f59;
        },
        'GBQRP': 'WYyLB',
        'TDKbO': function(_0x39b713) {
            return _0x39b713();
        },
        'mBuDJ': '🤡🤡🤡\x20恭喜！你刚刚被成功套路了！🤡🤡🤡',
        'yViHl': _0x53d1a4(0x2b1, 'gO!@'),
        'THmkF': '\x20\x20\x20🎯\x20被骗指数:\x20满级',
        'kRlpC': _0x53d1a4(0x2a4, 'of[c'),
        'KgMED': _0x53d1a4(0x257, '96fm'),
        'JEehk': _0x53d1a4(0x1ab, 'kaAV'),
        'comLQ': _0x53d1a4(0x21f, 'o4U1'),
        'gOIBV': '😂\x20你被骗了！',
        'KxocR': _0x53d1a4(0x3a9, 'x0!t')
    };
    _0x58debe['TDKbO'](playMockSound),
    console['log'](_0x58debe['mBuDJ']),
    console[_0x53d1a4(0x2d2, 'Cj1u')](_0x58debe['yViHl']),
    console[_0x53d1a4(0x1c9, 'ylzZ')](_0x58debe[_0x53d1a4(0x22a, 'VZ[O')]),
    console['log'](_0x58debe[_0x53d1a4(0x265, 'K9(3')]),
    console['log'](_0x53d1a4(0x356, 'x0*T')),
    console['log'](_0x58debe['KgMED']);
    const _0x47cdf2 = document[_0x53d1a4(0x2b9, 'dakL')]
      , _0x3d3156 = [_0x58debe[_0x53d1a4(0x399, 'UQfr')], _0x58debe['comLQ'], _0x53d1a4(0x1a7, 'G4zi'), _0x58debe[_0x53d1a4(0x2d4, 'dakL')], _0x58debe[_0x53d1a4(0x18a, 'qOKW')], _0x47cdf2];
    let _0x1e242f = 0x0;
    const _0x4d4b89 = setInterval( () => {
        const _0x5b0c5f = _0x53d1a4
          , _0x56095c = {
            'oXhqX': function(_0x18fe72, _0x4d7919) {
                const _0x381a03 = _0x27f0;
                return _0x58debe[_0x381a03(0x1a1, 'x0!t')](_0x18fe72, _0x4d7919);
            }
        };
        document[_0x5b0c5f(0x201, 'K9(3')] = _0x3d3156[_0x1e242f],
        _0x1e242f = (_0x1e242f + 0x1) % _0x3d3156['length'],
        _0x58debe[_0x5b0c5f(0x1c4, 'K9(3')](_0x1e242f, _0x3d3156['length'] - 0x1) && (_0x58debe[_0x5b0c5f(0x312, 'tJ)o')] === _0x58debe['GBQRP'] ? setTimeout( () => {
            const _0x266cc5 = _0x5b0c5f
              , _0x372502 = {
                'bHnCj': _0x58debe['zmBBC'],
                'fwmXx': function(_0x52fc9a, _0x34108f) {
                    const _0x5b6b58 = _0x27f0;
                    return _0x58debe[_0x5b6b58(0x3dd, 'gO!@')](_0x52fc9a, _0x34108f);
                },
                'OsILD': 'undefined'
            };
            _0x58debe['OrUyX'] !== _0x58debe[_0x266cc5(0x3c5, 'of[c')] ? (clearInterval(_0x4d4b89),
            document['title'] = _0x47cdf2) : (_0xcd9ff9[_0x266cc5(0x36c, 'x0!t')](_0x372502[_0x266cc5(0x262, 'lG08')], () => {
                const _0x52848f = _0x266cc5;
                _0x133625[_0x52848f(0x1cf, '9oCl')]();
            }
            ),
            _0x372502[_0x266cc5(0x2a5, 'sLKY')](typeof _0xebf706, _0x372502['OsILD']) && _0x34090a['load']());
        }
        , 0x7d0) : _0xcb5bb5[_0x5b0c5f(0x293, 'lsm1')]['transform'] = _0x5b0c5f(0x1d5, 'EsNS') + (0.8 + _0x56095c['oXhqX'](_0x1e4f1f[_0x5b0c5f(0x24d, 'dakL')](), 0.4)) + ')');
    }
    , 0x320);
}
function playMockSound() {
    const _0x524dbc = _0x50550a
      , _0x2c387e = {
        'NCyXm': _0x524dbc(0x1aa, 'U&wO'),
        'cNNPI': _0x524dbc(0x1c1, 'O6Yt'),
        'oePwV': function(_0x3f9b61, _0x59be73) {
            return _0x3f9b61 + _0x59be73;
        },
        'UoprI': function(_0x473a97, _0x21b0e0) {
            return _0x473a97 + _0x21b0e0;
        },
        'HQMhA': function(_0x108c76, _0x551871) {
            return _0x108c76(_0x551871);
        },
        'cwUaR': '资本做局器\x20-\x20我被套路了！',
        'tUpNg': function(_0x18b376, _0x50c0b3) {
            return _0x18b376 + _0x50c0b3;
        },
        'gdkXT': function(_0x3df3c, _0x325e54, _0x7b446b) {
            return _0x3df3c(_0x325e54, _0x7b446b);
        },
        'dCckV': _0x524dbc(0x357, 'K9(3'),
        'dEqIw': 'iZMFE'
    };
    try {
        const _0x448359 = new (window['AudioContext'] || window[(_0x524dbc(0x355, 'FaYf'))])()
          , _0x1eec6f = _0x448359[_0x524dbc(0x1df, 'V6Bg')]()
          , _0x448397 = _0x448359[_0x524dbc(0x414, '4Of$')]();
        _0x1eec6f[_0x524dbc(0x2ab, 'FaYf')](_0x448397),
        _0x448397['connect'](_0x448359[_0x524dbc(0x3f5, 'sLKY')]),
        _0x1eec6f[_0x524dbc(0x39a, '9oCl')][_0x524dbc(0x2b0, 'A[py')](0x320, _0x448359[_0x524dbc(0x420, 'x0!t')]),
        _0x1eec6f[_0x524dbc(0x1d1, 'ylzZ')]['exponentialRampToValueAtTime'](0x190, _0x448359[_0x524dbc(0x1f3, 'GMbK')] + 0.1),
        _0x448397[_0x524dbc(0x247, 'x0*T')]['setValueAtTime'](0.1, _0x448359['currentTime']),
        _0x448397[_0x524dbc(0x20a, 'WQS(')]['exponentialRampToValueAtTime'](0.01, _0x2c387e[_0x524dbc(0x1f4, 'FaYf')](_0x448359[_0x524dbc(0x32d, 'gO!@')], 0.1)),
        _0x1eec6f[_0x524dbc(0x321, 'y^R4')](_0x448359['currentTime']),
        _0x1eec6f[_0x524dbc(0x1e0, 'dlwb')](_0x448359[_0x524dbc(0x384, 'QrH0')] + 0.1),
        _0x2c387e[_0x524dbc(0x202, '68**')](setTimeout, () => {
            const _0x4f47ad = _0x524dbc
              , _0x2e3aa3 = {
                'CGcgF': _0x2c387e[_0x4f47ad(0x1e7, 'X]Fq')]
            };
            if (_0x2c387e['cNNPI'] !== _0x2c387e[_0x4f47ad(0x3b8, 'tJ)o')])
                _0x5b649f[_0x4f47ad(0x2d2, 'Cj1u')]('🔇\x20备用音频播放失败:', _0x5e27ac),
                _0x963c4e[_0x4f47ad(0x303, 'M2cx')](_0x2e3aa3[_0x4f47ad(0x2cf, 'gO!@')], () => {
                    const _0x4f9be1 = _0x4f47ad;
                    !_0x1ec88e && _0x4f1281[_0x4f9be1(0x3c6, 'WQS(')]()[_0x4f9be1(0x34e, 'Cj1u')]( () => {}
                    );
                }
                , {
                    'once': !![]
                });
            else {
                const _0x2e704d = _0x448359[_0x4f47ad(0x3b0, 'qOKW')]()
                  , _0x22edf3 = _0x448359[_0x4f47ad(0x316, 'tJ)o')]();
                _0x2e704d[_0x4f47ad(0x3d0, 'VZ[O')](_0x22edf3),
                _0x22edf3[_0x4f47ad(0x1f5, 'qTV9')](_0x448359['destination']),
                _0x2e704d[_0x4f47ad(0x2f3, 'pGJm')][_0x4f47ad(0x266, 'GMbK')](0x258, _0x448359[_0x4f47ad(0x2d1, 'EsNS')]),
                _0x2e704d[_0x4f47ad(0x2a7, '8#xm')][_0x4f47ad(0x32a, 'K9(3')](0x12c, _0x448359[_0x4f47ad(0x3db, 'pGJm')] + 0.15),
                _0x22edf3[_0x4f47ad(0x1b7, 'x0!t')][_0x4f47ad(0x311, 'V6Bg')](0.1, _0x448359['currentTime']),
                _0x22edf3[_0x4f47ad(0x1e4, 'V6Bg')][_0x4f47ad(0x336, 'dakL')](0.01, _0x2c387e[_0x4f47ad(0x1c5, 'of[c')](_0x448359[_0x4f47ad(0x2c1, '(KC9')], 0.15)),
                _0x2e704d[_0x4f47ad(0x1d2, 'N!!P')](_0x448359[_0x4f47ad(0x1f3, 'GMbK')]),
                _0x2e704d[_0x4f47ad(0x25c, '4&Zu')](_0x2c387e['UoprI'](_0x448359[_0x4f47ad(0x3db, 'pGJm')], 0.15));
            }
        }
        , 0x96);
    } catch (_0x2cfc19) {
        if (_0x2c387e['dCckV'] === _0x2c387e['dEqIw']) {
            const _0x45d912 = {
                'NFjmG': function(_0x424b67, _0x568d0e) {
                    return _0x2c387e['HQMhA'](_0x424b67, _0x568d0e);
                }
            };
            _0xb53082[_0x524dbc(0x358, 'sLKY')]({
                'title': _0x2c387e['cwUaR'],
                'text': _0x48e6c,
                'url': _0x4e77f2[_0x524dbc(0x1b3, '(KC9')][_0x524dbc(0x2d0, 'FaYf')]
            })['catch']( () => {
                _0x45d912['NFjmG'](_0x2cc724, _0xb42326);
            }
            );
        } else
            console['log'](_0x524dbc(0x322, 'x0!t'));
    }
}
function showExitModal() {
    const _0x4754ac = _0x50550a
      , _0x297ae4 = {
        'lZWtc': function(_0x14d5c1) {
            return _0x14d5c1();
        },
        'PcIkb': 'none',
        'PKKiO': _0x4754ac(0x224, 'K9(3'),
        'ugcTE': _0x4754ac(0x280, 'EsNS')
    };
    _0x297ae4['lZWtc'](playBackgroundMusic),
    mainModal[_0x4754ac(0x41b, 'GMbK')]['display'] = _0x297ae4['PcIkb'],
    exitModal[_0x4754ac(0x1dd, '68**')]['display'] = _0x297ae4[_0x4754ac(0x1ac, 'QrH0')],
    exitModal[_0x4754ac(0x1bd, 'dakL')](_0x297ae4[_0x4754ac(0x2e1, 'dlwb')])[_0x4754ac(0x308, 'EsNS')][_0x4754ac(0x2c3, 'pGJm')] = _0x4754ac(0x2ec, 'sLKY');
}
function _0x27f0(_0x491817, _0x50c348) {
    const _0x219c2a = _0x219c();
    return _0x27f0 = function(_0x27f0cc, _0x438b10) {
        _0x27f0cc = _0x27f0cc - 0x176;
        let _0x2c76ce = _0x219c2a[_0x27f0cc];
        if (_0x27f0['zCugsv'] === undefined) {
            var _0x20778b = function(_0xc15524) {
                const _0x35e09a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x275af8 = ''
                  , _0x18221b = '';
                for (let _0x39b99c = 0x0, _0x4a0ded, _0x397c59, _0x4cfcf8 = 0x0; _0x397c59 = _0xc15524['charAt'](_0x4cfcf8++); ~_0x397c59 && (_0x4a0ded = _0x39b99c % 0x4 ? _0x4a0ded * 0x40 + _0x397c59 : _0x397c59,
                _0x39b99c++ % 0x4) ? _0x275af8 += String['fromCharCode'](0xff & _0x4a0ded >> (-0x2 * _0x39b99c & 0x6)) : 0x0) {
                    _0x397c59 = _0x35e09a['indexOf'](_0x397c59);
                }
                for (let _0x25dc67 = 0x0, _0xb890c8 = _0x275af8['length']; _0x25dc67 < _0xb890c8; _0x25dc67++) {
                    _0x18221b += '%' + ('00' + _0x275af8['charCodeAt'](_0x25dc67)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x18221b);
            };
            const _0x39b049 = function(_0x59558d, _0x102378) {
                let _0x427335 = [], _0xfc901e = 0x0, _0x39df24, _0x144e8f = '';
                _0x59558d = _0x20778b(_0x59558d);
                let _0x1b0c36;
                for (_0x1b0c36 = 0x0; _0x1b0c36 < 0x100; _0x1b0c36++) {
                    _0x427335[_0x1b0c36] = _0x1b0c36;
                }
                for (_0x1b0c36 = 0x0; _0x1b0c36 < 0x100; _0x1b0c36++) {
                    _0xfc901e = (_0xfc901e + _0x427335[_0x1b0c36] + _0x102378['charCodeAt'](_0x1b0c36 % _0x102378['length'])) % 0x100,
                    _0x39df24 = _0x427335[_0x1b0c36],
                    _0x427335[_0x1b0c36] = _0x427335[_0xfc901e],
                    _0x427335[_0xfc901e] = _0x39df24;
                }
                _0x1b0c36 = 0x0,
                _0xfc901e = 0x0;
                for (let _0x1c0541 = 0x0; _0x1c0541 < _0x59558d['length']; _0x1c0541++) {
                    _0x1b0c36 = (_0x1b0c36 + 0x1) % 0x100,
                    _0xfc901e = (_0xfc901e + _0x427335[_0x1b0c36]) % 0x100,
                    _0x39df24 = _0x427335[_0x1b0c36],
                    _0x427335[_0x1b0c36] = _0x427335[_0xfc901e],
                    _0x427335[_0xfc901e] = _0x39df24,
                    _0x144e8f += String['fromCharCode'](_0x59558d['charCodeAt'](_0x1c0541) ^ _0x427335[(_0x427335[_0x1b0c36] + _0x427335[_0xfc901e]) % 0x100]);
                }
                return _0x144e8f;
            };
            _0x27f0['gTIADo'] = _0x39b049,
            _0x491817 = arguments,
            _0x27f0['zCugsv'] = !![];
        }
        const _0x321571 = _0x219c2a[0x0]
          , _0x2faa24 = _0x27f0cc + _0x321571
          , _0x2973de = _0x491817[_0x2faa24];
        return !_0x2973de ? (_0x27f0['dWoqeB'] === undefined && (_0x27f0['dWoqeB'] = !![]),
        _0x2c76ce = _0x27f0['gTIADo'](_0x2c76ce, _0x438b10),
        _0x491817[_0x2faa24] = _0x2c76ce) : _0x2c76ce = _0x2973de,
        _0x2c76ce;
    }
    ,
    _0x27f0(_0x491817, _0x50c348);
}
function resetToInitial() {
    const _0x208d37 = _0x50550a
      , _0x41d99e = {
        'NQIxk': '1|0|8|3|5|7|2|4|9|6',
        'SVMOp': _0x208d37(0x434, 'PXd6'),
        'RXaOx': _0x208d37(0x2c4, 'sLKY'),
        'BmnWB': _0x208d37(0x35b, 'K9(3')
    }
      , _0x231871 = _0x41d99e['NQIxk']['split']('|');
    let _0x4b8d60 = 0x0;
    while (!![]) {
        switch (_0x231871[_0x4b8d60++]) {
        case '0':
            successModal[_0x208d37(0x27c, 'kO7]')][_0x208d37(0x191, 'aItx')] = _0x208d37(0x26a, 'dlwb');
            continue;
        case '1':
            playBackgroundMusic();
            continue;
        case '2':
            progressText[_0x208d37(0x1b5, 'of[c')] = '0%';
            continue;
        case '3':
            mainModal[_0x208d37(0x27c, 'kO7]')][_0x208d37(0x423, 'o4U1')] = _0x41d99e[_0x208d37(0x217, 'O6Yt')];
            continue;
        case '4':
            progressStatus['textContent'] = _0x41d99e[_0x208d37(0x318, 'CmCt')];
            continue;
        case '5':
            progressContainer[_0x208d37(0x2da, 'y^R4')][_0x208d37(0x3d3, 'y^R4')]('show');
            continue;
        case '6':
            exitModal[_0x208d37(0x2e5, 'o4U1')](_0x208d37(0x3c2, 'dlwb'))[_0x208d37(0x35f, 'y^R4')]['animation'] = '';
            continue;
        case '7':
            progressFill[_0x208d37(0x1a5, '4&Zu')]['width'] = '0%';
            continue;
        case '8':
            exitModal[_0x208d37(0x242, 'tJ)o')]['display'] = _0x41d99e[_0x208d37(0x33b, 'o4U1')];
            continue;
        case '9':
            document['querySelector'](_0x208d37(0x35a, '4&Zu'))[_0x208d37(0x3aa, 'x0*T')]['display'] = _0x41d99e[_0x208d37(0x203, 'lsm1')];
            continue;
        }
        break;
    }
}
function createConfetti() {
    const _0x22c961 = _0x50550a
      , _0x317d36 = {
        'nNmNw': function(_0x3a8380, _0x1f1021) {
            return _0x3a8380 + _0x1f1021;
        },
        'dKTzR': function(_0xb49ea6, _0x33b388) {
            return _0xb49ea6 + _0x33b388;
        },
        'QMrNJ': function(_0xeb95ca, _0x2ba658) {
            return _0xeb95ca + _0x2ba658;
        },
        'fJFdh': function(_0x41f89f, _0x7d0429) {
            return _0x41f89f + _0x7d0429;
        },
        'ciyPd': function(_0x410ea5, _0x5c5434, _0x1e9d06) {
            return _0x410ea5(_0x5c5434, _0x1e9d06);
        },
        'gttgX': _0x22c961(0x394, 'UQfr'),
        'DIbAL': '#ee5a24',
        'WChMA': _0x22c961(0x438, 'of[c'),
        'jFKCn': _0x22c961(0x35c, '68**'),
        'etALS': function(_0x1d3168, _0x5b2e87) {
            return _0x1d3168 > _0x5b2e87;
        },
        'SfqFq': function(_0x2a6b34, _0x1a4f24) {
            return _0x2a6b34 * _0x1a4f24;
        },
        'SmjJs': _0x22c961(0x332, 'GMbK'),
        'IOpPM': function(_0x4d6f2e, _0x267f50) {
            return _0x4d6f2e * _0x267f50;
        },
        'YtHAo': function(_0x4ded60, _0xeeb02e) {
            return _0x4ded60 > _0xeeb02e;
        },
        'CkNtR': function(_0x4b43d6, _0x206016) {
            return _0x4b43d6 - _0x206016;
        },
        'qdAAN': 'cubic-bezier(0.25,\x200.46,\x200.45,\x200.94)',
        'FgeZX': function(_0x461159) {
            return _0x461159();
        }
    }
      , _0x5d6f62 = [_0x317d36[_0x22c961(0x18c, 'UQfr')], _0x317d36[_0x22c961(0x271, 'dakL')], _0x317d36[_0x22c961(0x42c, '68**')], _0x317d36[_0x22c961(0x189, 'tJ)o')], '#4ecdc4']
      , _0x40c4a8 = ['🤡', '💸', '🎪', '😂', '🎯', '💰', '📉', '🎭']
      , _0x4e1850 = 0x50;
    for (let _0x16c7b8 = 0x0; _0x16c7b8 < _0x4e1850; _0x16c7b8++) {
        if (_0x22c961(0x26e, 'tJ)o') !== 'NiATa') {
            const _0x45612a = document[_0x22c961(0x2ce, 'M2cx')](_0x22c961(0x3a0, '9oCl'))
              , _0x31e351 = _0x317d36[_0x22c961(0x34d, 'A[py')](Math[_0x22c961(0x418, 'U&wO')](), 0.7);
            _0x45612a[_0x22c961(0x40e, 'qTV9')][_0x22c961(0x313, 'x0!t')] = _0x22c961(0x29f, 'FaYf'),
            _0x45612a[_0x22c961(0x237, '4Of$')][_0x22c961(0x3ea, 'QrH0')] = _0x317d36['QMrNJ'](_0x317d36[_0x22c961(0x2e0, 'y^R4')](Math[_0x22c961(0x1f7, 'lsm1')](), 0x64), 'vw'),
            _0x45612a[_0x22c961(0x3fe, 'XK8k')][_0x22c961(0x302, 'A[py')] = _0x22c961(0x204, 'V6Bg'),
            _0x45612a[_0x22c961(0x333, 'lG08')][_0x22c961(0x3b3, 'QrH0')] = _0x317d36[_0x22c961(0x3a2, 'x0!t')],
            _0x45612a[_0x22c961(0x23e, 'gO!@')]['zIndex'] = _0x22c961(0x383, 'G4zi'),
            _0x45612a[_0x22c961(0x405, 'kaAV')]['userSelect'] = _0x317d36[_0x22c961(0x368, 'GMbK')];
            _0x31e351 ? (_0x45612a[_0x22c961(0x402, 'B2FE')] = _0x40c4a8[Math[_0x22c961(0x3cf, 'of[c')](_0x317d36[_0x22c961(0x3ae, 'FaYf')](Math[_0x22c961(0x2d7, 'XK8k')](), _0x40c4a8['length']))],
            _0x45612a['style'][_0x22c961(0x1ae, 'x0*T')] = _0x317d36[_0x22c961(0x22c, 'U&wO')](_0x317d36['SfqFq'](Math[_0x22c961(0x1f7, 'lsm1')](), 0xf), 0xf) + 'px') : (_0x45612a[_0x22c961(0x3e7, 'A[py')]['width'] = _0x317d36[_0x22c961(0x1b1, 'UQfr')](_0x317d36[_0x22c961(0x3a3, 'A[py')](_0x317d36[_0x22c961(0x33c, '8#xm')](Math[_0x22c961(0x2f1, 'of[c')](), 0x8), 0x5), 'px'),
            _0x45612a['style'][_0x22c961(0x3a5, 'M2cx')] = _0x45612a[_0x22c961(0x398, 'aItx')]['width'],
            _0x45612a[_0x22c961(0x2f0, 'WQS(')]['backgroundColor'] = _0x5d6f62[Math[_0x22c961(0x258, 'Aeos')](_0x317d36['IOpPM'](Math['random'](), _0x5d6f62[_0x22c961(0x24a, 'y^R4')]))],
            _0x45612a[_0x22c961(0x1a8, 'VZ[O')][_0x22c961(0x1cd, '4&Zu')] = _0x317d36[_0x22c961(0x2ff, 'N!!P')](Math['random'](), 0.5) ? '50%' : '0');
            document[_0x22c961(0x20d, 'BHYA')][_0x22c961(0x2d9, 'x0!t')](_0x45612a);
            const _0x36cfd3 = _0x45612a[_0x22c961(0x2cc, '(KC9')]([{
                'transform': 'translateY(-20px)\x20rotate(0deg)\x20scale(0)',
                'opacity': 0x1
            }, {
                'transform': _0x22c961(0x3be, 'GMbK') + _0x317d36[_0x22c961(0x28a, 'M2cx')](_0x317d36['IOpPM'](Math['random'](), 0x2d0), 0x168) + _0x22c961(0x256, '68**'),
                'opacity': 0x0
            }], {
                'duration': _0x317d36[_0x22c961(0x274, 'kO7]')](Math[_0x22c961(0x276, '9oCl')]() * 0xfa0, 0x7d0),
                'easing': _0x317d36['qdAAN']
            });
            _0x36cfd3[_0x22c961(0x3fb, 'U&wO')] = () => {
                const _0x485177 = _0x22c961;
                _0x45612a[_0x485177(0x410, 'x0*T')]();
            }
            ;
        } else {
            const _0x3f9e81 = {
                'Luone': function(_0x55624d, _0x278ae4) {
                    return _0x317d36['nNmNw'](_0x55624d, _0x278ae4);
                },
                'LXxQB': function(_0x4963a1, _0x3c474e) {
                    return _0x317d36['nNmNw'](_0x4963a1, _0x3c474e);
                },
                'HAGID': function(_0x51b0c0, _0x442593) {
                    const _0x601ae5 = _0x22c961;
                    return _0x317d36[_0x601ae5(0x193, 'QrH0')](_0x51b0c0, _0x442593);
                }
            };
            try {
                const _0x17b9d9 = new (_0x2a4397[(_0x22c961(0x21e, 'y^R4'))] || _0x4bb741[(_0x22c961(0x408, 'dlwb'))])()
                  , _0x10ee9a = _0x17b9d9[_0x22c961(0x401, 'EsNS')]()
                  , _0x364d28 = _0x17b9d9['createGain']();
                _0x10ee9a['connect'](_0x364d28),
                _0x364d28[_0x22c961(0x371, 'PXd6')](_0x17b9d9[_0x22c961(0x42f, 'tJ)o')]),
                _0x10ee9a['frequency'][_0x22c961(0x38c, 'QrH0')](0x320, _0x17b9d9[_0x22c961(0x186, '68**')]),
                _0x10ee9a['frequency'][_0x22c961(0x3f8, 'EsNS')](0x190, _0x317d36[_0x22c961(0x2d8, 'aItx')](_0x17b9d9[_0x22c961(0x3db, 'pGJm')], 0.1)),
                _0x364d28['gain']['setValueAtTime'](0.1, _0x17b9d9[_0x22c961(0x30f, 'K9(3')]),
                _0x364d28[_0x22c961(0x1b7, 'x0!t')][_0x22c961(0x3cd, 'tJ)o')](0.01, _0x317d36[_0x22c961(0x215, 'X]Fq')](_0x17b9d9[_0x22c961(0x32d, 'gO!@')], 0.1)),
                _0x10ee9a['start'](_0x17b9d9['currentTime']),
                _0x10ee9a[_0x22c961(0x24c, 'x0!t')](_0x317d36[_0x22c961(0x439, 'Cj1u')](_0x17b9d9[_0x22c961(0x2a9, 'X]Fq')], 0.1)),
                _0x317d36[_0x22c961(0x416, 'gO!@')](_0x553001, () => {
                    const _0x271ea3 = _0x22c961
                      , _0x55c539 = _0x17b9d9['createOscillator']()
                      , _0x210da0 = _0x17b9d9[_0x271ea3(0x216, 'dakL')]();
                    _0x55c539[_0x271ea3(0x362, 'U&wO')](_0x210da0),
                    _0x210da0[_0x271ea3(0x2d3, 'XK8k')](_0x17b9d9[_0x271ea3(0x290, '3h)(')]),
                    _0x55c539['frequency'][_0x271ea3(0x2b2, '8#xm')](0x258, _0x17b9d9[_0x271ea3(0x2a9, 'X]Fq')]),
                    _0x55c539['frequency'][_0x271ea3(0x1b9, '3h)(')](0x12c, _0x3f9e81[_0x271ea3(0x1c8, 'qTV9')](_0x17b9d9['currentTime'], 0.15)),
                    _0x210da0[_0x271ea3(0x19b, 'B2FE')]['setValueAtTime'](0.1, _0x17b9d9[_0x271ea3(0x378, 'XK8k')]),
                    _0x210da0[_0x271ea3(0x347, 'PXd6')][_0x271ea3(0x372, '4Of$')](0.01, _0x3f9e81[_0x271ea3(0x2dd, 'CmCt')](_0x17b9d9[_0x271ea3(0x420, 'x0!t')], 0.15)),
                    _0x55c539['start'](_0x17b9d9[_0x271ea3(0x32d, 'gO!@')]),
                    _0x55c539['stop'](_0x3f9e81[_0x271ea3(0x23a, 'M2cx')](_0x17b9d9[_0x271ea3(0x1b2, '3h)(')], 0.15));
                }
                , 0x96);
            } catch (_0xfd3c3b) {
                _0x5cd419[_0x22c961(0x249, 'X]Fq')](_0x22c961(0x238, 'qOKW'));
            }
        }
    }
    _0x317d36[_0x22c961(0x294, 'XK8k')](createBigEmojiEffect);
}
function createBigEmojiEffect() {
    const _0x5d9627 = _0x50550a
      , _0x552aa8 = {
        'tWJHb': function(_0x41d3fe, _0x230aea) {
            return _0x41d3fe !== _0x230aea;
        },
        'mVuWs': _0x5d9627(0x210, 'VZ[O'),
        'xegDd': _0x5d9627(0x1eb, 'lsm1'),
        'uGkzA': '30%',
        'lKOhm': _0x5d9627(0x3d9, 'FaYf'),
        'YMOFw': _0x5d9627(0x320, 'N!!P'),
        'ygmmG': _0x5d9627(0x299, 'Cj1u'),
        'hFLIB': 'translate(-50%,\x20-50%)\x20scale(0)\x20rotate(0deg)',
        'dUXnf': _0x5d9627(0x176, 'kO7]'),
        'rvzaO': _0x5d9627(0x2fc, 'UQfr'),
        'gLtpP': _0x5d9627(0x1f6, 'of[c'),
        'fUDGM': function(_0x416b24, _0x32293f) {
            return _0x416b24 === _0x32293f;
        },
        'wqvgp': '🎉\x20恭喜你发现了隐藏彩蛋！',
        'NyUXJ': '💡\x20小贴士：资本做局器的真正目的是让你意识到时间的宝贵！',
        'rZEdV': function(_0x5a5643, _0x2dc177) {
            return _0x5a5643 * _0x2dc177;
        }
    }
      , _0x48ab3a = ['🤡', '🎪', '💸', '😂'];
    _0x48ab3a[_0x5d9627(0x1e8, '4Of$')]( (_0x6123d5, _0x41c144) => {
        const _0x3c81bb = _0x5d9627
          , _0x4278f7 = {
            'JwjiC': function(_0x21bdb6, _0x470f71) {
                const _0x2b784c = _0x27f0;
                return _0x552aa8[_0x2b784c(0x428, 'B2FE')](_0x21bdb6, _0x470f71);
            },
            'DOwsf': _0x552aa8[_0x3c81bb(0x341, '96fm')],
            'cxfVd': _0x552aa8['NyUXJ']
        };
        _0x552aa8[_0x3c81bb(0x33f, 'of[c')](_0x3c81bb(0x1d8, '4Of$'), _0x3c81bb(0x213, 'ylzZ')) ? (_0x2a0c79++,
        _0x4278f7[_0x3c81bb(0x295, 'N!!P')](_0x3496d8, 0x5) && (_0x37033f[_0x3c81bb(0x2c5, 'GMbK')](_0x4278f7[_0x3c81bb(0x1b6, '68**')]),
        _0x7916ff[_0x3c81bb(0x1f9, '96fm')](_0x4278f7[_0x3c81bb(0x19d, 'dakL')]),
        _0x1a6c7a = 0x0)) : setTimeout( () => {
            const _0x113b5e = _0x3c81bb;
            if (_0x552aa8[_0x113b5e(0x19f, 'qOKW')](_0x552aa8['mVuWs'], _0x552aa8['mVuWs']))
                _0x2f5748[_0x113b5e(0x365, 'qOKW')]();
            else {
                const _0x49ae45 = document[_0x113b5e(0x24f, 'lsm1')]('div');
                _0x49ae45[_0x113b5e(0x2bb, '9oCl')] = _0x6123d5,
                _0x49ae45[_0x113b5e(0x40e, 'qTV9')]['position'] = _0x552aa8[_0x113b5e(0x26c, 'dakL')],
                _0x49ae45['style']['fontSize'] = _0x113b5e(0x212, 'V6Bg'),
                _0x49ae45[_0x113b5e(0x2ef, 'ylzZ')][_0x113b5e(0x259, 'VZ[O')] = _0x113b5e(0x40a, 'GMbK'),
                _0x49ae45['style'][_0x113b5e(0x24e, '4Of$')] = _0x552aa8[_0x113b5e(0x195, '9oCl')],
                _0x49ae45[_0x113b5e(0x432, 'qOKW')]['transform'] = _0x552aa8[_0x113b5e(0x223, 'kaAV')],
                _0x49ae45['style'][_0x113b5e(0x222, 'y^R4')] = _0x552aa8['YMOFw'],
                _0x49ae45[_0x113b5e(0x325, 'UQfr')]['pointerEvents'] = _0x552aa8[_0x113b5e(0x1fd, 'lsm1')],
                _0x49ae45[_0x113b5e(0x35f, 'y^R4')][_0x113b5e(0x374, 'EsNS')] = _0x113b5e(0x180, '4Of$'),
                document[_0x113b5e(0x252, 'aItx')]['appendChild'](_0x49ae45);
                const _0x1159d0 = _0x49ae45[_0x113b5e(0x2cc, '(KC9')]([{
                    'transform': _0x552aa8['hFLIB'],
                    'opacity': 0x0
                }, {
                    'transform': _0x552aa8[_0x113b5e(0x42b, 'A[py')],
                    'opacity': 0x1,
                    'offset': 0.5
                }, {
                    'transform': _0x552aa8[_0x113b5e(0x3d4, 'GMbK')],
                    'opacity': 0x0
                }], {
                    'duration': 0x5dc,
                    'easing': _0x552aa8[_0x113b5e(0x348, 'G4zi')]
                });
                _0x1159d0['onfinish'] = () => {
                    const _0x48cc09 = _0x113b5e;
                    _0x49ae45[_0x48cc09(0x182, 'pGJm')]();
                }
                ;
            }
        }
        , _0x552aa8['rZEdV'](_0x41c144, 0x190));
    }
    );
}
const shakeStyle = document['createElement']('style');
shakeStyle[_0x50550a(0x2b8, 'X]Fq')] = '\x0a\x20\x20\x20\x20@keyframes\x20shake\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%,\x20100%\x20{\x20transform:\x20translateX(0)\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2010%,\x2030%,\x2050%,\x2070%,\x2090%\x20{\x20transform:\x20translateX(-5px)\x20scale(1.02);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2020%,\x2040%,\x2060%,\x2080%\x20{\x20transform:\x20translateX(5px)\x20scale(0.98);\x20}\x0a\x20\x20\x20\x20}\x0a',
document[_0x50550a(0x279, 'ylzZ')][_0x50550a(0x2ea, 'lG08')](shakeStyle);
function shareResult() {
    const _0x5430eb = _0x50550a
      , _0x3d762d = {
        'iyTEj': function(_0xf7a5ab, _0x4747c6) {
            return _0xf7a5ab(_0x4747c6);
        },
        'VNTGb': function(_0x52c9a4) {
            return _0x52c9a4();
        },
        'NJHRp': '🤡\x20\x22资本做局器\x22你敢来挑战吗？',
        'qUnET': _0x5430eb(0x214, 'FaYf'),
        'ItBvq': '🎯\x20\x22资本做局器\x22你敢来挑战吗？',
        'UNaBw': function(_0x31a497, _0x3fea5d) {
            return _0x31a497 * _0x3fea5d;
        }
    };
    _0x3d762d[_0x5430eb(0x3bf, 'aItx')](playBackgroundMusic);
    const _0x5108ca = [_0x3d762d[_0x5430eb(0x437, 'XK8k')], _0x5430eb(0x1b0, 'BHYA'), _0x5430eb(0x225, 'kaAV'), _0x3d762d[_0x5430eb(0x39e, 'dakL')], _0x3d762d[_0x5430eb(0x31a, 'VZ[O')]]
      , _0x405e78 = _0x5108ca[Math[_0x5430eb(0x3c4, 'GMbK')](_0x3d762d[_0x5430eb(0x32c, 'CmCt')](Math[_0x5430eb(0x276, '9oCl')](), _0x5108ca[_0x5430eb(0x2de, 'qOKW')]))];
    navigator[_0x5430eb(0x38b, 'of[c')] ? navigator[_0x5430eb(0x38b, 'of[c')]({
        'title': _0x5430eb(0x330, 'dlwb'),
        'text': _0x405e78,
        'url': window[_0x5430eb(0x2f9, 'y^R4')][_0x5430eb(0x31c, 'EsNS')]
    })[_0x5430eb(0x411, '68**')]( () => {
        _0x3d762d['iyTEj'](fallbackShare, _0x405e78);
    }
    ) : fallbackShare(_0x405e78);
}
function fallbackShare(_0x4eb211) {
    const _0x588c27 = _0x50550a
      , _0x1937d5 = {
        'zPwlR': function(_0x161b83) {
            return _0x161b83();
        },
        'Gjdyw': _0x588c27(0x3b7, 'tJ)o'),
        'ArqNt': function(_0x5b80f7, _0x505c81) {
            return _0x5b80f7 > _0x505c81;
        },
        'pbcNw': 'fixed',
        'HLXOQ': function(_0x27c0e5, _0x22ef2c) {
            return _0x27c0e5 + _0x22ef2c;
        },
        'Rvabc': function(_0x112aa1, _0x50137b) {
            return _0x112aa1 * _0x50137b;
        },
        'yGRvO': _0x588c27(0x297, 'ylzZ'),
        'DaNWz': _0x588c27(0x3e3, 'FaYf'),
        'ZClRK': function(_0x15b2f1, _0x15b9c3) {
            return _0x15b2f1 * _0x15b9c3;
        },
        'ycBPr': _0x588c27(0x2ae, '68**'),
        'LZHsA': function(_0x163406, _0x93c64d) {
            return _0x163406 !== _0x93c64d;
        },
        'eUWKY': _0x588c27(0x284, '68**'),
        'pZJNO': function(_0x5b723b, _0x1863cc) {
            return _0x5b723b + _0x1863cc;
        },
        'znZic': function(_0x37ba7d, _0x21f98b) {
            return _0x37ba7d(_0x21f98b);
        }
    };
    navigator[_0x588c27(0x18f, 'N!!P')] ? navigator[_0x588c27(0x25b, 'V6Bg')]['writeText'](_0x1937d5[_0x588c27(0x3e2, 'B2FE')](_0x4eb211 + '\x0a', window[_0x588c27(0x1db, '3h)(')][_0x588c27(0x442, 'BHYA')]))[_0x588c27(0x240, '4Of$')]( () => {
        const _0x28f19c = _0x588c27;
        _0x1937d5[_0x28f19c(0x3c7, 'WQS(')](showShareSuccessMessage);
    }
    )['catch']( () => {
        const _0x5baba1 = _0x588c27;
        if (_0x1937d5[_0x5baba1(0x412, '9oCl')](_0x1937d5[_0x5baba1(0x21d, 'lsm1')], _0x1937d5[_0x5baba1(0x31d, '96fm')])) {
            const _0x282a9d = _0x40a6f8[_0x5baba1(0x379, '4&Zu')](_0x1937d5[_0x5baba1(0x25a, 'N!!P')])
              , _0xe4f4bb = _0x1937d5[_0x5baba1(0x207, 'V6Bg')](_0x5239fc[_0x5baba1(0x3a7, 'K9(3')](), 0.7);
            _0x282a9d['style'][_0x5baba1(0x1fa, 'lG08')] = _0x1937d5[_0x5baba1(0x1a6, 'dlwb')],
            _0x282a9d['style'][_0x5baba1(0x390, 'PXd6')] = _0x1937d5[_0x5baba1(0x22b, 'gO!@')](_0x1937d5[_0x5baba1(0x20c, 'ylzZ')](_0x4b0184[_0x5baba1(0x418, 'U&wO')](), 0x64), 'vw'),
            _0x282a9d['style'][_0x5baba1(0x267, 'aItx')] = _0x1937d5[_0x5baba1(0x3df, 'UQfr')],
            _0x282a9d[_0x5baba1(0x1a5, '4&Zu')][_0x5baba1(0x1c2, 'VZ[O')] = _0x1937d5[_0x5baba1(0x2ad, 'N!!P')],
            _0x282a9d[_0x5baba1(0x3ca, 'X]Fq')][_0x5baba1(0x1fc, 'x0*T')] = _0x5baba1(0x39b, 'V6Bg'),
            _0x282a9d[_0x5baba1(0x2f0, 'WQS(')][_0x5baba1(0x26d, 'tJ)o')] = _0x1937d5[_0x5baba1(0x248, 'O6Yt')];
            _0xe4f4bb ? (_0x282a9d[_0x5baba1(0x402, 'B2FE')] = _0x478c77[_0x547fc7[_0x5baba1(0x323, 'U&wO')](_0x1937d5[_0x5baba1(0x3cb, 'dakL')](_0x425b8e[_0x5baba1(0x3a7, 'K9(3')](), _0xe30c32[_0x5baba1(0x1d4, 'B2FE')]))],
            _0x282a9d[_0x5baba1(0x3a8, 'dakL')][_0x5baba1(0x3f7, 'CmCt')] = _0x1937d5['HLXOQ'](_0x1937d5[_0x5baba1(0x366, 'aItx')](_0x17c147[_0x5baba1(0x24d, 'dakL')](), 0xf), 0xf) + 'px') : (_0x282a9d['style'][_0x5baba1(0x211, 'CmCt')] = _0x1937d5[_0x5baba1(0x18b, 'lsm1')](_0x34a203[_0x5baba1(0x1f7, 'lsm1')](), 0x8) + 0x5 + 'px',
            _0x282a9d[_0x5baba1(0x278, 'sLKY')][_0x5baba1(0x218, 'dlwb')] = _0x282a9d[_0x5baba1(0x293, 'lsm1')][_0x5baba1(0x334, 'VZ[O')],
            _0x282a9d['style']['backgroundColor'] = _0x9bdc35[_0xca0a3d['floor'](_0x1937d5[_0x5baba1(0x2df, 'VZ[O')](_0x26ad3e[_0x5baba1(0x3dc, 'X]Fq')](), _0x145ea0[_0x5baba1(0x389, 'qTV9')]))],
            _0x282a9d[_0x5baba1(0x441, 'PXd6')][_0x5baba1(0x369, '4Of$')] = _0x1937d5[_0x5baba1(0x2e4, 'G4zi')](_0x89fa23[_0x5baba1(0x251, 'EsNS')](), 0.5) ? _0x1937d5[_0x5baba1(0x3ef, 'lsm1')] : '0');
            _0xd010ad['body'][_0x5baba1(0x376, '3h)(')](_0x282a9d);
            const _0x59e7a8 = _0x282a9d[_0x5baba1(0x409, 'U&wO')]([{
                'transform': 'translateY(-20px)\x20rotate(0deg)\x20scale(0)',
                'opacity': 0x1
            }, {
                'transform': 'translateY(100vh)\x20rotate(' + (_0x1937d5[_0x5baba1(0x413, '8#xm')](_0x30a33f[_0x5baba1(0x3dc, 'X]Fq')](), 0x2d0) - 0x168) + _0x5baba1(0x345, 'x0*T'),
                'opacity': 0x0
            }], {
                'duration': _0x1937d5[_0x5baba1(0x43b, 'dlwb')](_0x1937d5[_0x5baba1(0x314, 'M2cx')](_0x2ec8bb[_0x5baba1(0x2fe, '(KC9')](), 0xfa0), 0x7d0),
                'easing': _0x5baba1(0x1a2, 'of[c')
            });
            _0x59e7a8[_0x5baba1(0x243, 'VZ[O')] = () => {
                const _0x470eac = _0x5baba1;
                _0x282a9d[_0x470eac(0x28c, 'CmCt')]();
            }
            ;
        } else
            showManualShare(_0x4eb211);
    }
    ) : _0x1937d5['znZic'](showManualShare, _0x4eb211);
}
function showShareSuccessMessage() {
    const _0x339bbe = _0x50550a
      , _0x440c5f = {
        'excOv': _0x339bbe(0x3f3, 'O6Yt'),
        'khqHi': _0x339bbe(0x2c7, 'BHYA'),
        'JgzJw': _0x339bbe(0x23d, 'of[c'),
        'kQzNW': _0x339bbe(0x2c9, 'of[c'),
        'PCLza': '8px',
        'TNSlx': _0x339bbe(0x41f, 'WQS('),
        'uZhDN': _0x339bbe(0x178, 'y^R4'),
        'RDCRl': '500'
    }
      , _0x395190 = document[_0x339bbe(0x344, 'PXd6')](_0x339bbe(0x2cb, 'M2cx'));
    _0x395190['textContent'] = _0x440c5f['excOv'],
    _0x395190['style']['position'] = _0x339bbe(0x184, '4&Zu'),
    _0x395190[_0x339bbe(0x441, 'PXd6')][_0x339bbe(0x302, 'A[py')] = _0x440c5f[_0x339bbe(0x41e, 'qTV9')],
    _0x395190[_0x339bbe(0x293, 'lsm1')][_0x339bbe(0x31f, 'N!!P')] = '20px',
    _0x395190['style']['background'] = _0x440c5f[_0x339bbe(0x1e1, 'M2cx')],
    _0x395190[_0x339bbe(0x1dc, 'pGJm')][_0x339bbe(0x352, 'K9(3')] = _0x440c5f[_0x339bbe(0x3f0, 'dlwb')],
    _0x395190['style'][_0x339bbe(0x38a, '9oCl')] = '12px\x2020px',
    _0x395190[_0x339bbe(0x227, 'of[c')][_0x339bbe(0x364, 'UQfr')] = _0x440c5f[_0x339bbe(0x1a4, 'QrH0')],
    _0x395190[_0x339bbe(0x23e, 'gO!@')][_0x339bbe(0x1bb, 'FaYf')] = _0x440c5f[_0x339bbe(0x3da, 'ylzZ')],
    _0x395190['style'][_0x339bbe(0x29e, '96fm')] = _0x440c5f[_0x339bbe(0x1e3, 'pGJm')],
    _0x395190['style']['fontWeight'] = _0x440c5f[_0x339bbe(0x183, 'lG08')],
    document[_0x339bbe(0x269, 'qOKW')][_0x339bbe(0x2ea, 'lG08')](_0x395190),
    setTimeout( () => {
        _0x395190['remove']();
    }
    , 0xbb8);
}
function showManualShare(_0x2b1460) {
    const _0x452fc5 = _0x50550a
      , _0x2a4a52 = {
        'phoVT': function(_0x55405c, _0x342d2b) {
            return _0x55405c + _0x342d2b;
        },
        'ZemEn': function(_0x1afc49, _0x41d812) {
            return _0x1afc49 + _0x41d812;
        },
        'IKIZA': function(_0x4d7733, _0x490691) {
            return _0x4d7733 + _0x490691;
        },
        'SUqmp': _0x452fc5(0x264, '8#xm')
    };
    alert(_0x2a4a52[_0x452fc5(0x382, 'WQS(')](_0x2a4a52[_0x452fc5(0x298, 'tJ)o')](_0x2a4a52[_0x452fc5(0x338, 'M2cx')]('🤡\x20分享文本：\x0a\x0a', _0x2b1460) + '\x0a\x0a', window[_0x452fc5(0x3fc, 'Aeos')][_0x452fc5(0x41d, 'tJ)o')]), _0x2a4a52[_0x452fc5(0x361, '4&Zu')]));
}
function handleMoreLink() {
    const _0x1f285b = _0x50550a
      , _0x465cec = {
        'icHHP': function(_0x520912) {
            return _0x520912();
        },
        'wIRvX': _0x1f285b(0x255, '8#xm')
    };
    _0x465cec['icHHP'](playBackgroundMusic);
    const _0x1adf6e = _0x465cec['wIRvX'];
    window[_0x1f285b(0x3e5, '9oCl')](_0x1adf6e, _0x1f285b(0x3ec, 'A[py')),
    console[_0x1f285b(0x400, 'B2FE')](_0x1f285b(0x2f6, 'gO!@'));
}
startBtn[_0x50550a(0x3e9, 'lG08')]('click', startProgress),
exitBtn[_0x50550a(0x37c, '4Of$')](_0x50550a(0x304, '4&Zu'), showExitModal),
againBtn[_0x50550a(0x3ce, 'UQfr')]('click', resetToInitial),
backBtn['addEventListener'](_0x50550a(0x1f1, 'lG08'), resetToInitial),
shareBtn['addEventListener'](_0x50550a(0x304, '4&Zu'), shareResult),
moreLink['addEventListener']('click', _0x28a2e2 => {
    const _0x8b6c29 = _0x50550a;
    _0x28a2e2[_0x8b6c29(0x375, 'y^R4')](),
    handleMoreLink();
}
),
document[_0x50550a(0x433, 'B2FE')](_0x50550a(0x38e, '3h)('), _0x37f4b6 => {
    const _0x387193 = _0x50550a
      , _0x232f7a = {
        'rGISV': _0x387193(0x235, 'Cj1u'),
        'pxFXi': function(_0x5ef380, _0x4c2780) {
            return _0x5ef380 === _0x4c2780;
        },
        'HEPFo': function(_0x66f95b, _0x1c5797) {
            return _0x66f95b !== _0x1c5797;
        },
        'hRisU': _0x387193(0x385, '3h)('),
        'EdLyC': 'XxyZF',
        'iotwS': function(_0x509fa9) {
            return _0x509fa9();
        }
    };
    _0x232f7a['pxFXi'](_0x37f4b6[_0x387193(0x1d6, '(KC9')], _0x387193(0x1ec, 'N!!P')) && (_0x37f4b6[_0x387193(0x3d8, '3h)(')](),
    _0x232f7a[_0x387193(0x2f5, 'X]Fq')](mainModal[_0x387193(0x398, 'aItx')]['display'], _0x232f7a['hRisU']) && (_0x232f7a['HEPFo'](_0x232f7a[_0x387193(0x2fd, 'PXd6')], 'XzWGN') ? _0x232f7a[_0x387193(0x317, 'Aeos')](showExitModal) : (_0xbd24b3[_0x387193(0x3e4, 'M2cx')](_0x232f7a['rGISV']),
    _0x3eec82[_0x387193(0x3e4, 'M2cx')](_0x387193(0x3a1, 'PXd6')),
    _0x3591b6 = 0x0)));
}
),
document[_0x50550a(0x387, 'N!!P')]('touchstart', () => {
    const _0x29e209 = _0x50550a;
    !musicStarted && bgMusic[_0x29e209(0x2db, 'pGJm')]()[_0x29e209(0x3b5, 'kO7]')]( () => {}
    );
}
, {
    'passive': !![],
    'once': !![]
}),
document['addEventListener'](_0x50550a(0x324, 'kaAV'), () => {
    const _0x5ea12e = _0x50550a;
    !musicStarted && bgMusic[_0x5ea12e(0x289, 'of[c')]()[_0x5ea12e(0x1cb, 'ylzZ')]( () => {}
    );
}
, {
    'once': !![]
}),
document[_0x50550a(0x233, 'dlwb')](_0x50550a(0x29c, 'of[c'), _0x1f3534 => {
    const _0x118747 = _0x50550a;
    _0x1f3534[_0x118747(0x354, 'QrH0')]();
}
),
document[_0x50550a(0x260, 'X]Fq')](_0x50550a(0x196, 'kaAV'), () => {
    const _0xe1edd1 = _0x50550a
      , _0x5861b9 = {
        'vsSfK': _0xe1edd1(0x187, '9oCl'),
        'waWnu': function(_0x4f7566, _0x308e6c) {
            return _0x4f7566 + _0x308e6c;
        },
        'QQqXN': function(_0x47333a, _0x4fa58c) {
            return _0x47333a * _0x4fa58c;
        },
        'vilRZ': function(_0xe61cc0, _0xa96057) {
            return _0xe61cc0 !== _0xa96057;
        },
        'utQni': 'emdlX',
        'YtnsU': _0xe1edd1(0x1c0, 'N!!P'),
        'DQbEr': _0xe1edd1(0x282, 'QrH0'),
        'Rygph': _0xe1edd1(0x2aa, 'B2FE'),
        'gzDqo': function(_0x825b7b, _0x23555b) {
            return _0x825b7b > _0x23555b;
        },
        'aaedp': _0xe1edd1(0x1b8, 'x0*T'),
        'YAFFy': _0xe1edd1(0x28e, 'V6Bg'),
        'SdLQO': _0xe1edd1(0x38d, 'BHYA'),
        'ccBNe': 'vQmht',
        'MqvQm': function(_0x202265, _0x92d0b1) {
            return _0x202265 !== _0x92d0b1;
        },
        'Bvvyy': _0xe1edd1(0x190, 'lG08'),
        'bgFZX': 'xZSGz',
        'qxOtI': function(_0x16b9e7, _0xec08ce) {
            return _0x16b9e7 + _0xec08ce;
        },
        'KFtju': _0xe1edd1(0x3b9, 'N!!P'),
        'mRzEX': _0xe1edd1(0x2eb, 'K9(3'),
        'QMgSJ': function(_0x3935c8) {
            return _0x3935c8();
        },
        'vvRdV': function(_0x153a1a, _0x303808, _0x5319fd) {
            return _0x153a1a(_0x303808, _0x5319fd);
        }
    };
    _0x5861b9[_0xe1edd1(0x377, 'sLKY')](initWeChatAudio),
    pageMoreLink['style'][_0xe1edd1(0x31e, 'G4zi')] = _0xe1edd1(0x36b, 'lsm1'),
    setTimeout( () => {
        const _0x18e235 = _0xe1edd1
          , _0x1d599e = {
            'vRYrZ': _0x5861b9[_0x18e235(0x21a, 'CmCt')],
            'FUgwD': function(_0x124072, _0x2b98dd) {
                return _0x124072 > _0x2b98dd;
            },
            'qlIHF': function(_0xf58f40, _0x63c15d) {
                const _0x38b6a1 = _0x18e235;
                return _0x5861b9[_0x38b6a1(0x2ca, 'X]Fq')](_0xf58f40, _0x63c15d);
            },
            'OjycJ': function(_0x167639, _0x35eb6b) {
                const _0x326922 = _0x18e235;
                return _0x5861b9[_0x326922(0x40f, '3h)(')](_0x167639, _0x35eb6b);
            },
            'WmloT': function(_0xb688db, _0x38a4bc) {
                const _0x1489c8 = _0x18e235;
                return _0x5861b9[_0x1489c8(0x2a8, 'QrH0')](_0xb688db, _0x38a4bc);
            },
            'PhinY': function(_0x113658, _0x19d2dd) {
                return _0x113658 * _0x19d2dd;
            },
            'qfkrh': '1px\x201px\x202px\x20rgba(0,\x200,\x200,\x200.5)'
        };
        _0x5861b9[_0x18e235(0x305, 'A[py')](_0x5861b9[_0x18e235(0x350, 'sLKY')], _0x5861b9[_0x18e235(0x19a, 'sLKY')]) ? moreHint && (_0x5861b9[_0x18e235(0x342, 'EsNS')](_0x18e235(0x26b, 'U&wO'), _0x18e235(0x206, 'BHYA')) ? (moreHint['style']['animation'] = _0x18e235(0x24b, 'lsm1'),
        setTimeout( () => {
            const _0x217a18 = _0x18e235;
            moreHint[_0x217a18(0x250, '96fm')][_0x217a18(0x18d, 'B2FE')] = _0x1d599e[_0x217a18(0x192, 'dlwb')];
        }
        , 0x1f4)) : !_0x1c138b && _0x267a0f[_0x18e235(0x232, 'K9(3')]()[_0x18e235(0x415, 'dakL')]( () => {}
        )) : _0x1d599e[_0x18e235(0x177, 'lG08')](_0x372d7f[_0x18e235(0x1f7, 'lsm1')](), 0.6) && (_0x16a97f['style'][_0x18e235(0x296, 'ylzZ')] = _0x1d599e[_0x18e235(0x2af, 'dlwb')](_0x1d599e[_0x18e235(0x39c, 'XK8k')](_0x1d599e[_0x18e235(0x309, 'aItx')](_0x5e0309['random'](), 0x4), 0x6), 's'),
        _0x50128f[_0x18e235(0x432, 'qOKW')][_0x18e235(0x263, 'X]Fq')] = _0x18e235(0x2a0, 'qOKW') + _0x1d599e['WmloT'](0.8, _0x1d599e[_0x18e235(0x25d, 'x0*T')](_0xeba985[_0x18e235(0x3d2, 'x0*T')](), 0.4)) + ')',
        _0x23c749[_0x18e235(0x308, 'EsNS')][_0x18e235(0x17f, 'UQfr')] = _0x1d599e[_0x18e235(0x30a, 'pGJm')]);
    }
    , 0x1388),
    setTimeout( () => {
        const _0xbe85da = _0xe1edd1;
        mainModal[_0xbe85da(0x29a, '8#xm')](_0x5861b9[_0xbe85da(0x3c0, 'ylzZ')])[_0xbe85da(0x3aa, 'x0*T')]['transform'] = _0x5861b9['Rygph'];
    }
    , 0x64),
    _0x5861b9[_0xe1edd1(0x17b, 'EsNS')](setInterval, () => {
        const _0x430717 = _0xe1edd1
          , _0x1e7ab0 = {
            'MhBPS': _0x5861b9[_0x430717(0x199, '3h)(')],
            'kKsxK': _0x5861b9[_0x430717(0x22e, 'qTV9')],
            'gBZFX': 'translate(-50%,\x20-50%)\x20scale(0)',
            'lgBhJ': _0x5861b9['SdLQO'],
            'RvcAm': _0x430717(0x3ed, '(KC9'),
            'CNkBZ': _0x430717(0x2b7, 'PXd6'),
            'prpCj': 'cubic-bezier(0.68,\x20-0.55,\x200.265,\x201.55)',
            'kOoPY': function(_0x406f7c, _0x1a78fd) {
                return _0x406f7c !== _0x1a78fd;
            },
            'dekVN': 'CZZjg',
            'ICWtT': _0x5861b9[_0x430717(0x367, '3h)(')],
            'bajYN': function(_0x1b2f4d, _0xff1d1d) {
                const _0x37c2b7 = _0x430717;
                return _0x5861b9[_0x37c2b7(0x2f8, 'EsNS')](_0x1b2f4d, _0xff1d1d);
            },
            'xDjFp': _0x5861b9[_0x430717(0x2b5, '3h)(')],
            'YMKZG': _0x5861b9[_0x430717(0x36e, 'x0!t')],
            'IxaFq': function(_0x3427d8, _0x35f8a8) {
                return _0x5861b9['qxOtI'](_0x3427d8, _0x35f8a8);
            },
            'pBMuY': function(_0x1bf42b, _0x31900f) {
                return _0x1bf42b * _0x31900f;
            },
            'zagIM': function(_0x55fe72, _0x5993c9) {
                const _0x307402 = _0x430717;
                return _0x5861b9[_0x307402(0x396, 'VZ[O')](_0x55fe72, _0x5993c9);
            }
        }
          , _0x418cc6 = document[_0x430717(0x37f, 'XK8k')](_0x5861b9[_0x430717(0x3ad, 'A[py')])
          , _0x2fc5c4 = document[_0x430717(0x288, 'X]Fq')](_0x5861b9['mRzEX']);
        _0x418cc6[_0x430717(0x291, 'A[py')](_0x14d155 => {
            const _0x1b44e0 = _0x430717
              , _0x209864 = {
                'KlvRK': _0x1b44e0(0x37b, 'Aeos'),
                'dbWlF': _0x1e7ab0[_0x1b44e0(0x2be, 'X]Fq')],
                'aNvbg': _0x1e7ab0['kKsxK'],
                'OHnSY': _0x1e7ab0[_0x1b44e0(0x30e, 'FaYf')],
                'HMQry': _0x1e7ab0[_0x1b44e0(0x185, 'M2cx')],
                'KuDFs': _0x1e7ab0[_0x1b44e0(0x26f, 'qOKW')],
                'NkTvp': _0x1e7ab0[_0x1b44e0(0x236, 'X]Fq')],
                'cpVNe': _0x1e7ab0[_0x1b44e0(0x3ee, '8#xm')]
            };
            if (_0x1e7ab0[_0x1b44e0(0x3c8, 'sLKY')](_0x1e7ab0['dekVN'], _0x1e7ab0['ICWtT'])) {
                if (Math['random']() > 0.6) {
                    if (_0x1e7ab0['bajYN'](_0x1e7ab0[_0x1b44e0(0x1c6, 'UQfr')], _0x1e7ab0[_0x1b44e0(0x436, 'VZ[O')]))
                        _0x14d155[_0x1b44e0(0x293, 'lsm1')]['animationDuration'] = _0x1e7ab0[_0x1b44e0(0x275, 'X]Fq')](_0x1e7ab0[_0x1b44e0(0x20b, 'dlwb')](Math[_0x1b44e0(0x373, 'PXd6')](), 0x4), 0x6) + 's',
                        _0x14d155[_0x1b44e0(0x3e7, 'A[py')]['transform'] = _0x1b44e0(0x431, 'kO7]') + _0x1e7ab0[_0x1b44e0(0x2a3, 'EsNS')](0.8, _0x1e7ab0[_0x1b44e0(0x19e, 'lG08')](Math[_0x1b44e0(0x40d, 'ylzZ')](), 0.4)) + ')',
                        _0x14d155[_0x1b44e0(0x272, 'K9(3')][_0x1b44e0(0x374, 'EsNS')] = _0x1b44e0(0x2b6, 'VZ[O');
                    else {
                        const _0x4c4eea = _0x3853fa[_0x1b44e0(0x287, '(KC9')]('div');
                        _0x4c4eea[_0x1b44e0(0x1da, 'QrH0')] = _0x3c5e43,
                        _0x4c4eea[_0x1b44e0(0x333, 'lG08')][_0x1b44e0(0x3d7, 'aItx')] = _0x209864[_0x1b44e0(0x1d3, 'Aeos')],
                        _0x4c4eea[_0x1b44e0(0x360, 'O6Yt')]['fontSize'] = _0x209864['dbWlF'],
                        _0x4c4eea[_0x1b44e0(0x3aa, 'x0*T')][_0x1b44e0(0x27a, 'B2FE')] = _0x1b44e0(0x209, 'ylzZ'),
                        _0x4c4eea['style']['top'] = _0x209864[_0x1b44e0(0x1e2, 'of[c')],
                        _0x4c4eea[_0x1b44e0(0x1b4, 'V6Bg')]['transform'] = _0x209864[_0x1b44e0(0x27b, '68**')],
                        _0x4c4eea[_0x1b44e0(0x23b, 'M2cx')][_0x1b44e0(0x381, 'BHYA')] = _0x209864[_0x1b44e0(0x425, 'GMbK')],
                        _0x4c4eea[_0x1b44e0(0x3ca, 'X]Fq')][_0x1b44e0(0x188, 'ylzZ')] = _0x1b44e0(0x2f7, 'kO7]'),
                        _0x4c4eea[_0x1b44e0(0x227, 'of[c')]['textShadow'] = _0x209864[_0x1b44e0(0x43f, '68**')],
                        _0x196c10['body']['appendChild'](_0x4c4eea);
                        const _0x5a4082 = _0x4c4eea[_0x1b44e0(0x194, 'G4zi')]([{
                            'transform': _0x1b44e0(0x300, 'gO!@'),
                            'opacity': 0x0
                        }, {
                            'transform': _0x209864[_0x1b44e0(0x42e, 'CmCt')],
                            'opacity': 0x1,
                            'offset': 0.5
                        }, {
                            'transform': _0x1b44e0(0x246, 'tJ)o'),
                            'opacity': 0x0
                        }], {
                            'duration': 0x5dc,
                            'easing': _0x209864[_0x1b44e0(0x3b2, 'M2cx')]
                        });
                        _0x5a4082[_0x1b44e0(0x3a4, 'qOKW')] = () => {
                            const _0x17f290 = _0x1b44e0;
                            _0x4c4eea[_0x17f290(0x3d5, 'BHYA')]();
                        }
                        ;
                    }
                }
            } else
                _0x91bbbb(_0x30f023);
        }
        ),
        _0x2fc5c4[_0x430717(0x291, 'A[py')](_0x2e1e5a => {
            const _0xa81200 = _0x430717;
            _0x5861b9[_0xa81200(0x34b, 'aItx')](Math[_0xa81200(0x3e8, '96fm')](), 0.8) && (_0x2e1e5a['style'][_0xa81200(0x421, 'of[c')] = _0xa81200(0x430, 'CmCt') + (0.8 + _0x5861b9[_0xa81200(0x228, 'ylzZ')](Math['random'](), 0.4)) + ')');
        }
        );
    }
    , 0x1f40);
}
),
console['log'](_0x50550a(0x335, 'EsNS')),
console[_0x50550a(0x1cc, 'VZ[O')](_0x50550a(0x37a, 'K9(3')),
console[_0x50550a(0x327, 'EsNS')](_0x50550a(0x30d, 'gO!@'));
let clickCount = 0x0;
document['querySelector']('.title')['addEventListener'](_0x50550a(0x427, 'QrH0'), () => {
    const _0x4fb487 = _0x50550a
      , _0x2d1328 = {
        'XtzSP': function(_0xeb4941, _0x3a056a) {
            return _0xeb4941 === _0x3a056a;
        },
        'NvUjG': _0x4fb487(0x435, 'x0*T'),
        'WWkqc': _0x4fb487(0x37e, 'N!!P')
    };
    clickCount++,
    _0x2d1328[_0x4fb487(0x301, '(KC9')](clickCount, 0x5) && (console[_0x4fb487(0x3e4, 'M2cx')](_0x2d1328['NvUjG']),
    console['log'](_0x2d1328['WWkqc']),
    clickCount = 0x0);
}
),
setTimeout( () => {
    const _0x28fc94 = _0x50550a
      , _0x1d7d3a = {
        'PJbGn': '⏰\x20你已经在这个页面停留了5分钟...'
    };
    console[_0x28fc94(0x25f, 'gO!@')](_0x1d7d3a['PJbGn']),
    console['log']('💭\x20也许是时候去做一些更有意义的事情了？');
}
, 0x493e0);
var version_ = 'jsjiami.com.v7';
