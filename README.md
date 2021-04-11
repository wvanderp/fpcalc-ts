# fpcalc-ts
A current wrapper for typescript and typescript

## Functions

<dl>
<dt><a href="#fpcalc">fpcalc(filePath, [options])</a> ⇒ <code>Promise.&lt;FpcalcReturn&gt;</code></dt>
<dd><p>this function calculates the acoustID fingerprint of a file.
fpcalc uses ffmpeg to open the file so make sure that ffmpeg can open the file.
you can change the path to fpcalc by supplying an options parameter</p>
</dd>
<dt><a href="#queryApi">queryApi(fingerprint, key)</a> ⇒ <code>Promise.&lt;queryApiReturn&gt;</code></dt>
<dd><p>this function takes the fingerprint and queries the api for as much information about the audio as possible</p>
</dd>
</dl>

<a name="fpcalc"></a>

## fpcalc(filePath, [options]) ⇒ <code>Promise.&lt;FpcalcReturn&gt;</code>
this function calculates the acoustID fingerprint of a file.fpcalc uses ffmpeg to open the file so make sure that ffmpeg can open the file.you can change the path to fpcalc by supplying an options parameter

**Kind**: global function  
**Returns**: <code>Promise.&lt;FpcalcReturn&gt;</code> - return the fingerprint and duration rounded and unchanged  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | the full or relative path to the audio file. this path is used unchanged |
| [options] | <code>FpcalcOptions</code> | can be used to change the fpcalc location |
| [options.command] | <code>string</code> | the absolute path or name of the command that you want to use for calculating the fingerprint (must be fpcalc compatible) |

<a name="queryApi"></a>

## queryApi(fingerprint, key) ⇒ <code>Promise.&lt;queryApiReturn&gt;</code>
this function takes the fingerprint and queries the api for as much information about the audio as possible

**Kind**: global function  
**Returns**: <code>Promise.&lt;queryApiReturn&gt;</code> - an object with all the information about the audio  

| Param | Type | Description |
| --- | --- | --- |
| fingerprint | <code>FpcalcReturn</code> | the fingerprint object from [fpcalc](#fpcalc) |
| key | <code>string</code> | your personal key to acoustID. available from https://acoustid.org/my-applications |

