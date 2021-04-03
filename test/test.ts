import {it} from 'mocha';
import {expect} from 'chai';
import path from 'path';
import fpcalc from '../src'

const testCases = [
    {
        fileName: './mp3/BoxCat Games - Epic Song.mp3',
        fingerprint: {
            duration: 54,
            fingerprint: 'AQABppmSZBGjkMgf_Gg5_Lh8vB7O4cpxPcGapDmcJsd5YXrYCHmWExp1HWlz9IyGDz2MOsGFHmFy4sfeEKRS1B9u4SeoC_qNH7ka2DmuwLeOfjglHqFCJNGvCE-1oFmGcg_OEffRT2iccrg__BlRbUSzMriMnDnOQ9t2Id4IHy-u3bDx5Rv24w3xVcc1OGH2oPaWFDmlHG2E74NY0fhyoDmu40ftQ0vSI88OTs1xN0V7fD-uHT-cH8bTFsiV4dC8I8edR3h4MFo_nDyO68XIwV-Onngv_CrwtXgVhJkK7bqQpxfaGc-CE6Px_fim47i0w-eHLx3y7FCpPEHuVXAVtMrxH7WPt0jrQxd2wdcxmsdPaJSG3KBvnDqqH66QHz_0GxdOqM4OnjiRCv1x8cP3oll3_DixD94Pdzt-EV9EWNXwUUeeGTo8Hrk-7FvgEzfxnvhxHaeO-3gipIFMPUEsMnGwL1GDdDyedzj0wkdepB2OWzrW4zrR7rj-I8t93IOfAz98HT2OLMeDLlHwHnqO8PLgH_9gGyd-7MYFp6GFHj_uHcmVHc2YHPlxJR_uYCdwOOo8uMeX5Djx8bAi5AnUKg-eBy-a_3iYoj-0IDwebPURWztu7M6hkZGRqxZ4eziFikP644c-PEdO8BdiZzihIxWLPtFx5wqeHWfQPBR2vuh1As9RksaPa0fIRuizQ9x2_IgeH-dx3PhxfBceHmZw0UcOeXuCK-vx4Dt84_ygDzmO57h2_DteBiGZ49HBjomP8LgC_8AHH7xww8-QakIPPUPe5MT0w79w3jguwT_ewPGH-jh1nMcvhGFlaJRy5Ef94VywE8d9vDh1fMlxwhxl5Ie27FEQmYlyVBt95L3QOC9eaD7SHj16HWnF48No5uiiE_qOXHUEhttwOFSO48jV4zpePAfP4z9yODlK5kWffLhy-HsE7_gD_PCeGuM_5BLeyNCeoxe85ciPR8yxA46zw5M-PMeV4A8OM9rx7NSR7wkqUSueodku1MeZGv0ILcVPXEcPB9oqHCd7xHtxhUetH__h40fXA2YAtowohZwAAkokhEBGKOEEMo4gB4AzVgICjUEAEWCMYJY5wBAhghlAlMGMICQYIQASIhghDjmklBNCGYkEIQgJxxADRhEFjGCGAKSMIFIgpIgRAhjGEBGEOEKAAQAZYQgUihkjiBHCSUEQUCIggIyyDmOhgDEKKOMwEcARQIBiiDgBACFIK0UMYoQAoxCVEjEgCEEGCCAAAIAKCQih1gmFoBEIUOKkFEU4ggQwAhqFDHNEAsO8IYIAJJRSRAkhBCCCAIwcU4ZZgI0QwBBFkBFAUACMkAAYhgBxiAFHTELKAeQNAIwo5JDyiBEGACBCGCM0AlYAwYADwCgiEACKCImNEwI5ApCA0BgYDEGESGAcAkQAxJTxgAlIEEKEKVkOUoQxQRwQwiMkhCECEAooEUAAgoRATBnknFEKEQCcAMAYQxgjCiLFVSGCECQAAMoyBw',
            fullDuration: 54.94
        }
    },
    {
        fileName: './mp3/Broke For Free - Night Owl.mp3',
        fingerprint: {
            duration: 194,
            fingerprint: 'AQADtEmUaEkUJUmWCD5wwPiNCx6EUwcOZ8XxAzjyw_dxoj-OOzzO4WSRi9B-OAd04AdvNPXx4s2DH-8H5k2OfyHE6hse5MS_49qH6zJ23MJ5uHGAKcdxHx9yJUeb5sAPHxB-HCYO4cCNS3B-6MSREod3-Djewt_R40d-410OXdLRXxDl4_hW_HgOFz0-4D--HDmmy0Wa_tCXT8hzfC--Hz78CD32hAHI7Qiz6dB-7Mh5NBw5_Mjx48dxPMegizh-4UQq-MGJ8ceVISV-6HiPdDf84yHyozqe44dyPMe9o4f449jxwR_K53gu_PiO-jGcaziPZxb05Ej54ccV5fCPa8OPz_iP70CPvLgmQcfOo5HyDUdDGfpYHJ1p-Cx--Dj84fgYPIdz6EevofyRdsSLw3_xE4113LiPW2D2hAgT6B8OJh-Koz-absH0ofli_NCHHxfCXpORpndxZTn0If9hbTO--PCHPsGHP8bx55jK6Wi6I8d3o9EvQDfM3Cgh_-jRHD-Owgd-DSI5XLgOn8aR-4Jv1CtOHc1VMMd1nFmJHzEpHF1pcMePDT8O23CPptBxHT-eqAh1WMWP5zCuHKa044OV5zF-Cvvh40B4_MfxKDl-XD9aEs2Mozya49xxD70FP0fRL2iOC1py4kCmH_VTlDXh8_iJHxf6nMWRU4ea_Ai7B_4D-kgxCI-O_Eb44DgO3Tya5Driw2dufNKO_9hh__iY4Ed_nA1OCkdo5Wg8SGPxG-WvwOgnQu_R6fhx4YcB_zjMAxd8HpcPiMeP8JgO70df9HDHo89wvEPeFF3IFGLgh9CuAzu0bFqMUhuKpj-OL8elCtUnWDvOELl9-MclHb9x7YK_Dz8eHEcR_MJxJQ_q7SiKw9cBE8erA14JPId1fPihM_iPI4VXBnsNn8Fv9B9enLqRT8HXlNAkfnhwGIoP_6A6wo3RH-_xHcc3VMt1iDpiE_5yPB_-wD-Op_iOC_WGU8p0hIeWZ-CR7jq-0dHw49HRpCKK_PiPNy_o5cd5aJm0ZAjJDB--E8-GPrXQMDiN6wjn5RCjjEdI5fiDH81z1OKJJ6lxIdvmo6egReGLWP_wC1-WCixzXGi26QjPHPvSCvqOXoV7tBtuDX0yDcf1Ddrpo4-QHpWjFH_QacmHt7FwefiFDXkOIbwOTkwUbcP34EPIaUaTBz--BvryBnpAh0f3BFq0RT6uI75wRkefCw0TnMeNcA1viCNRDblyXHnww5_ALx-RH9ehbteQN0ejX6j0FM_wa8MPxj7CnDGuHPqwF-1TNBfQH1ry5TiFdryRpj3OZJbhajEqGf3QSHF6fFGwj_Dxk0SugOYOcZQiIw9-oc0Gu4H3E58RZjwekByqPYWWD__xlThzfKKJXETYV3BedM2h92hCCiH3Hd-DG_6RT4Q-PBeRTTTRCNVz4S9-_GBFlOQR5oEeVsKRH1OeoD_uGecRpo5Q-cWzQtvOwz9ybDb-4z_sKQ5cEf9mpA-Pa9DB6EtFPOSLP3gG0Q1KvYjJHb10fImLzDkq_WiepbiGb8cfPF7Rhzma2vjy4D60XUHDI5byWfgegPrxHfl6XMd3aGwLRxTCVUqHb5mFg_0RUmic4oSuB0-OPsS-Ex_-FaLeo-fxoeURWYYfFT9eNJMyD28afBmL_mDCqEdenGPhdYGs0cP14JXhvtBxUcePJ7rwozeaM9Bz8H0GXTvuG08WhLlR68gffOOhTVWOLIl048lxHb7wpMWTG9eRjyKaqLmgzfiTIudBH9dxeGzx4kq0IjqaOgra4YGmf2iqJYasBX0XwbH2IOUyD8d1-Dmq73gcnDlC-cV2VNDI7JCSVy5-44G6DM11OBpeoVF5PIwLHj_EOFEmnMcZ5MpxBqeYo4elpwjPDnd2aJSDMD6uC88Fl8N14voRD3oKSnkuxD_Kp_gyg_mS48yR6_BGQTm-3Dgj9Mnh6vhU-MepHuJlnEfYoWSPJ-zhJ7h0-BnKp8e-eAkO50IifNGJ9MzxtcMf_DMamSiRB8-hJ3h10Ie_ZIgdfCb-oQ-Px4e5o0-FQFMcBQ1_xFLWGdfxHM2HPi6e6EZWQZ-P6g3CKNSFH-dU4Td4nC9S-9gvfKmho5UNH_WLj-izHNfxo89Rv1BmRQi13Md1PNqJ3sGZDv6PDy-yEPqqIn7k4Q--5GgeFkW-4seT49JxSEm1BH0ifMI_5Moio3FQ68hHCz80OdnRKBmPHJyWB1c89EHz7Mil6vihC59IVGJkIdWH8cPEHs9xNFWL_sKF7Cu0H82kyRry49bg1MeOeJhvaPEZACUKdEYISyDGQAFMrAcMCSGMBUgJwQljBAEggBGSIQOMIcyDIBEEhgtFnDHOGCuGE0RYZ8hmzAhmjQEGCGIQsIQgxBxCgECvBBIABIIEYIRYh5RQ6AhBGWKEOCWA4cY5pQBQjIgmkCSWG6QU0kooAIhCThAlgENMKQCcBMwBh6BiSBBQhAIKOSUENwKYRZFxyApHBBFCAAGwFgoJi4AlAhlSnAJAUGGYNEEggYUEghHjiCAHKACIEsIQQIhSRFAlBARKUAOUQ8gqSyyTyEAjEILKMUWZUxRABpwACgiNrGICgIEcEoBQoQwRzACCIKCIAMGQsE4JAYwCjCAgkDBAQcQMQIABAAiRgCQhgCDEEYMME4ABggUWUwjopBAEEEEIdggx5wQMBhkhgHFEQUSIEYgIYwUhxCCBLGUCEkScIZYIwwwCRBhBDBXMCEmBQsJQEoVQgAhjkBJACWAUgVRQiiwhQgROCIBGKCmIIAAQgaQCiAEGJEMCKUcQQIoohYBhwhgkBANGMkaFSYQAABhygDCjqBEGCQMMBQoJIYyVTAhDDABCIMIMAQZJIpgQQghmGCQCKCSIIIIBJQAiRFChBFHCEycEVQwIAohighiAEEJCICIVMMBAAggxgBmAFJPACOaYMAwAQ5gBBABLBEAQAUEANQAIQpQAABFhHAPCGGAAEIgogxBSBBoDIBAGEQoAUBwYQxTRkkDJlAEEOEIYAJAIgA2BRAFEgBACAIUQE0AwpQwyiiFGKAGACMYIU-A4ZggwiiFgDTEEISqAIKIoS4QwgCjpBAEGAwEcQoQR5YgAEACjhBGAGCONQQoJaJADSglrFCEIASEAE4YAARBTQgxphABAGSAEMkgBhxAjRCAkiCEAEgMIIsAw4wlhQjBDkRAMCAmEYAAY4ZgADAkJJCUKIWEEQM4gQgRyxiAFhDHKAQMFMcwUwpQSUhBloAA',
            fullDuration: 194.12
        }
    },
    {
        fileName: './mp3/Gillicuddy - Springish.mp3',
        fingerprint: {
            duration: 142,
            fingerprint: 'AQADtIkmh5EiQc8uND_aHQd8nAFq5SgeDvVh_Sg_PCe-Z9AoHg3JIn-DUkez4Ax-uEd-PGi-ovRxaMWlEL3xHM2FXhIu6LrRLGfQa8iJWjka4TqOMMZpfAgj_Ed_NNyHK8ePumiePPhyNMxxJoN4NGqH3yF-BW3oD82WnLh-NEepB5ePdNLx4NLhE7KI6x6aSRfRK3jUw-5xJS9O9EIzTQqe6TgOoTn6xQquC001HY8CPReaHU_w9AhtnDn-o10uXAfqw8_RHB_QIDmRqp1R7SlKfcOjD3jVw9xRMtJxPOnxZCfSXDKevvhPPD8enOhzHCaPkDOucFpyPDyOX2hyXBH6SMeP5MmRK_rQCyeeo8Ff3DjPoXkuB8VReNzRHEc-JItaHM2nCZ-dDEXT5BSuHM3Rf3B_5DmuHI-OJlFOVN-J7yi0jIROHt5CXI_xD-GSB03UUin-CAiTi-iqCKozIc-FK1fwPYSfF6eOB7giHg3z40f1HH-In3hy9IHh44IrpEeyNcQvouFF9LlRJx-aKj8-NJNC9NFxnCeuh0aYKkenJETQDOGaHbl65MmH_1CtwU-IHMdzfGLQ_Ohl5MqDJ4KeIu-MMg-a6siD-oKaSkd-9MeTHd-D97BvHM_R70SYPUiOJj6644yeCT_K4wyuTbiOazjCvHi6BOrxR2ijsGgs4cfDI8yZ4yHRmDIuyjg8Mvgy4SeOZF9UhCnOpLnxLDveB8cT5vCSnThyX0HyDJUT8ajD48ljND8qqsYlHV90PChPDsnzIH8OJ7uKa8Lzo-TxorZ4mElR1kVpNFfwMXhOxBeaxkV9HA-SR8YTJcX54Gge9Nnxh_gl-Lyg43yKO8fzFD--EUUjHvlyJLuG9-jX4sfRo1ZYXDwOrUKjaBl-VB8T_Cd61FF8NMeH_mi4lsi14mmH6kFT9XgSkdD-EM2kBGXGFGnN4czhJhlCXMIVPMfR_AxOxsFxZ8dLTfB8mETZ421Qv0id7Lh-NNGFM7nxB2h-9EfLoDmOInE0hORZVB-J5sS1o983NCe-o2HGozze41SeIZlCp2imvbjzwPvxRInwhUH9Q8vxIT-aRP_RCz9x5-iVwaoyVN-RJ0fyPHiO5j6e5aiTHxceFlfRrD9qnLkAjw8-1EEPHZ3RxCt-DQ8P-xS-CvXR-GhzoXmLj8d7ONKRRzkeQjze44k06Eco6rBMOEd51Xge_EGoJnkg6gnipiPKZHuC8xUeNFUmKqjT5DieBc3k42GG-vgvXMd9Ct_wPShx5fgE40gWNYh3EaUvws8LNy-uHSWDNvrRbAmP9_iPm0czPUS1RDh8vMvxhKjtwf-QZ9Ae5MRJPDueOWjyog-f4b-G_7jwJSizDE2y5Pii5OiP9NMHLb-G6A9O4hhzHdVrNBWz4iee4cD1QA_QaS_cB4_wHJ6o4BOOd0TzD08exFcl6Ed-Cn2Oho9xCheeFLfgHdeR_Ih_PDmmW2CO_WjJ4uFx4UW0o9MNac6D_UibFI-OHAnPHN_x5JpxusVzwT9-5EOyo-GOKkuyoAkf_PiRHkmPZ-lR82ie5LjxHP_x4ceUhEco7sCdQ-vgImxyoc-B_fgFT5GOkzeeHOaOI8yRPA923XicozKaVdqI5AlGI1S2EY21MMXzCc-J4_jR9gncS3hNdFob1EdzJD_CakLTHf-J77jS4n2QH8mV4zn-wG9xKbiOIwxPJDub4c5JYF0ChvrhH7MP68IPTymSIzz2zCBzJfhzTGGUZUabhHiE_EgrpsWjHb-I7yHxfPB1XMFz-MjXI6kzdMF5vPlwMoGT6uhTnDt-oDamWIh5glkuOIbXgzP-C-KLdCr6aEa9F8YewY3w40fCxEeuwc_RC2WSPUEzKUAvREr1QN9RKeEz-HjwCz_K_MIl0Yg09hMcSeHx4McF_w_6BOfxJMnxPwV85Ege-riOqi_h7vjhCz6K49AOj0GjHr-GJ_NR6y38PPjR_hru40ee49EFRyf0aBZxHv1DNE-EPGtRyhWcLMh5_PCToLgffDc6LXBEhuin4jr08EJNoVnGHPqPPk-GB6FTof7hnCj7EBd-XA9648JzXDh0ohIvohfR3EW9HI1x7ccTHX0yHo1xaeTx6AgpdWicfNB5NEeZJUMpXYdonDpyBtZ_VDue4ELlDFYVoY-OmDqSJzlx5sOP5kcfHtfx4FxwOXBeXPxwNBd6NEcdITeS5biJZlwV_Avxo2GS48rhw33R5zOu8bjx13A5Ba_k4z7SZTt0JopR27DDHK4yEdpfIc9yPDl-VIefGLmSQPuOvPhyFk_yoD_8Hv1x_Hh0NLNlVH_x48fx6TiOo0H4DImLXxNx3ni-oWF49Ee7oGnS4znOcKjSE86JnsUZHF34w3Fo_EIdV0FM0YF8hE-CJh-eET_-oM_R_HgSXD-OvNHRVMnR56j3wkdsiYS1oz-e40dNNA9xdPrhCNoDNKEedDwXXFnw50NT8QAECBEIEMIkAIQQBpAgEAtomHBAiAIYAYABI5wHijgkiRJUCEKRBoIwSAQgRAGBhBDRIMOAIUAYYhRAhAkEGMOECYMAFZ4CYIgiBCoNiEFKGUSIUQghxYASABhCgFCOAgIBEEwMZhgRDAIljGVWIaMAAgAC4YgDgCAAjgIIGaSsAIAQJhQiAABGhIAEIYIEE4wgQ4wCQgoDkLXAKOCUAAYYAxxyAhDkDDBGGEAYIcwppgxCTACEjIDISAIJsgAgYAwATEqgENeMGEGgAIY4pBwDxBByCEQFAKKIoYghAoAWhCgiBQGOC6SUEQoYgAwhwgBEhaRCIYGSEMwYIgAARClGkBLACEeFINogJUwTggBAhSiBCgCRQoQh5gAgQBA0DFCQAYaIMAZQYIEwAhmnCANCEKwYQ0AYI4AjBAngKAIAYKCAMMAYKBQjQDAgDGIeEEANIowwIw2yVgKghDHGkUAIMYpSQSBiAAhixHCEKQQAYAQJYoyiiCAgFEFAGIQMEFAgQAFhCBBmKCGCISAAQEwA9iCQQgAggDGWM2EUYhQaaJhRxoEJCBDCICUEAYwgyBwRyBBkGBMOQUIwIEIyAIJxAAkAmBWOOIYVcYwhEYgAghJBhHEIOEKQEhRApgBAgCiCCBIKEGwMI0ghIJRyggBIAHAACmUcoJQYBpiCEgkAADCGQMOJMQoQAr5AgAkAgAEIIQcKA0ohQJRxjCnIgCAAKEAcAEoRaAViABHgmAFCCAAAYYgUAQiggBIigEcASUI9gIBBJAA0QABgkQAKMaMQIIwggwgQSgFAiAGEMEGQAQ4IQQ1RBhpOlHCOEiEEhYIAQawQAACiiBEDAMkIAFB0YiAAxDCDhGCIIccBQQpYIZQACgKBoHcAEAKEAQIRAJQCggABMACKGAAEIsIBRgBDAAmAKDAYHgIyIQQApIQQFhlMlCIAGUEcIIgQ54hiiCAkhCMKAmOoJZIwAhURRBkEiBAO',
            fullDuration: 142.93
        }
    }
]

// eslint-disable-next-line no-restricted-syntax
for (const testCase of testCases) {
    it('should return the right fingerprint', async function () {
        const fp = await fpcalc(path.join(__dirname, testCase.fileName))
        expect(fp).to.deep.equal(testCase.fingerprint);
    })
}
