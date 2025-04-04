export function SanitizeInput(input: string){
    if (typeof input !== 'string') return input;
    return input.replace(/[<>"'&]/g, function(match) {
      switch (match) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        case '&': return '&amp;';
        default: return match;
      }
    }).trim();
}