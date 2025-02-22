import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface TokenAdditionalInfoProps {
  formData: {
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
    creatorName: string;
    creatorWebsite: string;
    revokeFreeze: boolean;
    revokeMint: boolean;
    revokeUpdate: boolean;
    [key: string]: any;
  };
  setFormData: (data: any) => void;
}

export const TokenAdditionalInfo: React.FC<TokenAdditionalInfoProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Social Links</h3>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            placeholder="https://"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            placeholder="@username"
            value={formData.twitter}
            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telegram">Telegram</Label>
          <Input
            id="telegram"
            placeholder="t.me/username"
            value={formData.telegram}
            onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="discord">Discord</Label>
          <Input
            id="discord"
            placeholder="discord.gg/invite"
            value={formData.discord}
            onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Creator Information</h3>
        <div className="space-y-2">
          <Label htmlFor="creatorName">Creator Name</Label>
          <Input
            id="creatorName"
            value={formData.creatorName}
            onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="creatorWebsite">Creator Website</Label>
          <Input
            id="creatorWebsite"
            value={formData.creatorWebsite}
            onChange={(e) => setFormData({ ...formData, creatorWebsite: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Token Permissions</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeFreeze"
              checked={formData.revokeFreeze}
              onCheckedChange={(checked) => setFormData({ ...formData, revokeFreeze: checked })}
            />
            <Label htmlFor="revokeFreeze">Revoke freeze authority</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeMint"
              checked={formData.revokeMint}
              onCheckedChange={(checked) => setFormData({ ...formData, revokeMint: checked })}
            />
            <Label htmlFor="revokeMint">Revoke mint authority</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="revokeUpdate"
              checked={formData.revokeUpdate}
              onCheckedChange={(checked) => setFormData({ ...formData, revokeUpdate: checked })}
            />
            <Label htmlFor="revokeUpdate">Revoke update authority</Label>
          </div>
        </div>
      </div>
    </div>
  );
};
