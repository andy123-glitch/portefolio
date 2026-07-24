export default function Badge({ color, texte = ""}) {
  return (
    <div
      className="inline-flex bg-tag-bg font-card-foreground border border-border items-center justify-center 
    gap-2 font-semibold rounded-xl transition-all text-sm text-card-foreground py-2.5 px-5 uppercase">
      {color && <span className={`bg-[${color}] h-3 w-3 rounded-xl`}></span>}
      {texte}
    </div>
  );
}
