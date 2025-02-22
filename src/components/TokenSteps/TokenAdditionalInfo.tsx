
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface TokenAdditionalInfoProps {
  data: {
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
    creatorName: string;
    creatorWebsite: string;
    revokeFreeze: boolean;
    revokeMint: boolean;
    revokeUpdate: boolean;
  };
  onComplete: (data: {
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
    creatorName: string;
    creatorWebsite: string;
    revokeFreeze: boolean;
    revokeMint: boolean;
    revokeUpdate: boolean;
  }) => void;
  onBack: () => void;
}

export const TokenAdditionalInfo: React.FC<TokenAdditionalInfoProps> = ({
  data,
  onComplete,
  onBack,
}) => {
  const [website, setWebsite] = React.useState(data.website);
  const [twitter, setTwitter] = React.useState(data.twitter);
  const [telegram, setTelegram] = React.useState(data.telegram);
  const [discord, setDiscord] = React.useState(data.discord);
  const [creatorName, setCreatorName] = React.useState(data.creatorName);
  const [creatorWebsite, setCreatorWebsite] = React.useState(data.creatorWebsite);
  const [revokeFreeze, setRevokeFreeze] = React.useState(data.revokeFreeze);
  const [revokeMint, setRevokeMint] = React.useState(data.revokeMint);
  const [revokeUpdate, setRevokeUpdate] = React.useState(data.revokeUpdate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement the actual token creation logic
    onComplete({
      website,
      twitter,
      telegram,
      discord,
      creatorName,
      creatorWebsite,
      revokeFreeze,
      revokeMint,
      revokeUpdate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Social Links</h3>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="@username"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telegram">Telegram</Label>
          <Input
            id="telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            placeholder="t.me/username"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="discord">Discord</Label>
          <Input
            id="discord"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            placeholder="discord.gg/invite"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Creator Information</h3>
        <div className="space-y-2">
          <Label htmlFor="creatorName">Creator Name</Label>
          <Input
            id="creatorName"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="creatorWebsite">Creator Website</Label>
          <Input
            id="creatorWebsite"
            type="url"
            value={creatorWebsite}
            onChange={(e) => setCreatorWebsite(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Authority Settings</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeFreeze"
              checked={revokeFreeze}
              onCheckedChange={(checked) => setRevokeFreeze(checked as boolean)}
            />
            <Label htmlFor="revokeFreeze">Revoke Freeze Authority</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeMint"
              checked={revokeMint}
              onCheckedChange={(checked) => setRevokeMint(checked as boolean)}
            />
            <Label htmlFor="revokeMint">Revoke Mint Authority</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeUpdate"
              checked={revokeUpdate}
              onCheckedChange={(checked) => setRevokeUpdate(checked as boolean)}
            />
            <Label htmlFor="revokeUpdate">Revoke Update Authority</Label>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Create Token
        </Button>
      </div>
    </form>
  );
};
